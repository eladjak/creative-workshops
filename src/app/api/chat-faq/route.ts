import { NextResponse } from "next/server"

const SYSTEM_PROMPT = `אתה צ'אטבוט באתר ׳מהראש אל הדף׳ - סדנאות קומיקס, איור ואנימציה לילדים ובני נוער של אלעד יעקובוביץ'.

ניסיון: 85+ עבודות מקוריות בבלוג ׳מהראש אל הדף׳, 42 איורים לסדרה ב׳מקור לילדים׳, סדנת ציור מצולמת בערוץ מאיר, עיצוב תפאורה לתיאטרון סצינה, פרויקטי קומיקס: ארמדיל, רדיקס, רובו סמיילי, עולם קטן, אדירי התכלת.

קהל יעד: בתי ספר, חוגים, אירועים, מתנ"סים. גילאים 8-16. תשובות בעברית, חמות וקצרות (2-4 משפטים). מחירים — שלח לטופס.`

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) return NextResponse.json({ content: "הצ'אט עדיין בהרצה — שלח/י פרטים בטופס." })
  try {
    const body = await req.json()
    const messages = body?.messages || []
    if (!Array.isArray(messages) || messages.length === 0) return NextResponse.json({ error: "messages array required" }, { status: 400 })
    const recent = messages.slice(-10)
    const conversationText = recent.map((m: { role: string; content: string }) => `${m.role === "user" ? "משתמש" : "אסיסטנט"}: ${m.content}`).join("\n")
    const fullPrompt = `${SYSTEM_PROMPT}\n\nשיחה עד כה:\n${conversationText}\n\nאסיסטנט:`
    const r = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify({ contents: [{ parts: [{ text: fullPrompt }] }], generationConfig: { temperature: 0.6, maxOutputTokens: 350 } }),
    })
    if (!r.ok) return NextResponse.json({ content: "סליחה, יש בעיה זמנית. נסה שוב או שלח דרך טופס Contact." })
    const data = await r.json()
    const content = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "סליחה, לא הבנתי. נסה לנסח אחרת."
    return NextResponse.json({ content })
  } catch {
    return NextResponse.json({ error: "Internal error", content: "סליחה, נסה שוב בעוד רגע." }, { status: 500 })
  }
}
