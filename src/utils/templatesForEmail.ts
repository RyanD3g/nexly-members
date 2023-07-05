export const recoverPass_template = (code:string)=>{
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Recuperação de Senha - Nexly</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #1b1b1b; color: #ffffff; padding: 20px;">
        <table style="max-width: 600px; margin: auto; background-color: #222222; border-collapse: collapse; border-radius: 10px; overflow: hidden;">
          <tr>
            <td style="padding: 30px; text-align: center;">
              <img src="https://exemplo.com/logo-nexly.png" alt="Logo da Nexly">
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              <h2 style="font-size: 24px; margin-bottom: 30px;">Recuperação de Senha</h2>
              <p style="font-size: 16px; margin-bottom: 30px;">Olá,</p>
              <p style="font-size: 16px; margin-bottom: 30px;">Para recuperar a sua senha, utilize o código de recuperação abaixo:</p>
              <div style="background-color: #333333; padding: 20px; width:50%; margin: 0 auto; border-radius: 10px; margin-bottom: 30px;">
                <h3 style="font-size: 20px; margin: 0; width:100%; color: #ffffff; text-align:center;">Código de Recuperação:</h3>
                <div style="background-color: #1b1b1b; width:30%; margin: 0 auto; color: #ffffff; font-size: 19px; font-weight: bold; padding: 10px; margin-top: 10px; text-align: center;">
                  ${code}
                </div>
              </div>
              <p style="font-size: 16px; margin-bottom: 30px;">Caso você não tenha solicitado a recuperação de senha, ignore este e-mail.</p>
              <p style="font-size: 16px; margin-bottom: 30px;">Atenciosamente,<br>Equipe Nexly</p>
            </td>
          </tr>
        </table>
      </body>
    </html>
    
    `;
};
