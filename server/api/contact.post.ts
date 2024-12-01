import * as nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  console.log('API endpoint called') // 追加
  const body = await readBody(event)
  console.log('Received body:', body) // 追加

  const config = useRuntimeConfig()
  console.log('Config loaded') // 追加

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: config.gmailUser,
      pass: config.gmailAppPassword
    }
  })

  const mailOptions = {
    from: config.gmailUser,
    to: config.gmailUser, // 受信用メールアドレス
    subject: `ポートフォリオサイトからのお問い合わせ: ${body.subject}`,
    html: `
      <p>以下の内容でお問い合わせがありました。</p>
      <hr>
      <p>名前: ${body.name}</p>
      <p>メールアドレス: ${body.email}</p>
      <p>件名: ${body.subject}</p>
      <p>メッセージ:</p>
      <p>${body.message}</p>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('メール送信エラー:', error)
    throw createError({
      statusCode: 500,
      message: 'メール送信に失敗しました'
    })
  }
})