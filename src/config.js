export default {
    "sql": {
        "host": "127.0.0.1",
        "user": "root",
        "password": "",
        "database": "bahamas",
        "port": 3306
    },

    "channels": {
        "welcome_channel": "981216116657496135", // canal de mensagem de bem vindo
        "exit_channel": "981216117831909376" // canal de mensagem de log de saida
    },

    "atendimento": {
        "category": "1035799140212416532", // categoria aonde a call de atendimento será criada
        "staff": "1035799111041036389" // Aqui vc coloca o id do cargo que vai poder usar o comando de atendimento
    },

    "idservidor": {
        "id": "818895818941530123", // Aqui vc coloca o id do seu discord
    },

    "connect": {
        "link": "https://cfx.re/join/4xk8yo", // Aqui vc coloca o link do botão do conexão
        "players": "2048", // aqui vc coloca a quantidade de players que sua key do fivem suporta
        "ipvps": "189.127.164.243:30120" // aqui vc coloca o ip da sua vps / exemplo: ipdavps:30120 tem que ser nesse padrão
    },

    "automatico": {
        "authrole": "981216065281491026", // id do cargo que a verificação vai dar ao usuario
        "automessage": "1035799142171164712" // id do canal que vai receber em 1 em 1 hora um msg automatica
    },

    "whitelist": {
        "imageurl": "https://cdn.discordapp.com/attachments/1025959186732953651/1036356477373382767/banner-whitelist-embed.png", // Aqui vc coloca o link da imagem que vai aparecer la na allowlist
        "channelRole": "1035799152115843092", // canal aonde será recebido o id
        "WhitelistIsOpen": true, // Coloque como "false" caso queira que a whitelist seja desabilitada
        "simultaneousWhitelist": 20, // limite de quantas whitelist podem serem feitas ao mesmo tempo
        "category": "1035799138127851591", // categoria aonde o canal de whitelist será criado
        "result": "1035799150735925254", // canal aonde o resultado será postado
        "staff": "1035799111041036389", // cargo necessario para aprovar / reprovar whitelists
        "channel": "1035800757129195531", // canal aonde será enviado as whitelist para serem lidas
        "waiting_role": "1035799123183534150", // cargo que será recebido quando o membro fizer a wl (aguardado resultado da whitelist)
        "approved_role": "1035799122244022352", // cargo que será recebido quando o membro for aprovado na wl (aguardado liberação de ID ou HEX)
        "questions": [
            {
                id: '01',
                question: 'Nome e idade do seu personagem e seu nome e Idade (RL)\n``Lembre-se de usar nomes registráveis em cartório.``',
                time: 5,
                caracteres: 256
            }

        ]
    },

    "liberation": {
        "rename": "1121922350934405200", // canal aonde será enviado o discord, id e nome do personagem para renomear o membro do discord!
        "channel": "1132056171071688834", // canal aonde o membro vai enviar hex // id para liberação
        "addRole": "1074387649302892655", // cargo que será entregue quando o ID for liberado!
        "removeRole": "981216065281491026", // cargo que será removido quando o ID for liberado!
        "table": "accounts",
        "column": "whitelist",
        "identifier": "id"
    },

    "ticket": {
        "category": "1035799141156130877", // categoria aonde o canal de texto de ticket será criado
        "staff": "1035799111041036389", // cargo que terá acesso ao ticket
        "table": "discord", // tabela aonde ficará registrado todas as informações sobre tickets
        "categories": [{
            label: '📁 Suporte',
            description: 'Tickets para você tirar suas dúvidas.',
            value: 'Tirar dúvidas',
        },
        {
            label: '💎 Dúvidas Gemas',
            description: 'Tire suas dúvidas sobre nosso sistema de gemas.',
            value: 'Realizar uma Dúvidas sobre Gemas',
        },
        {
            label: '🚨 Denúncia',
            description: 'Viu algo de errado e tem como comprovar? Denúncie.',
            value: 'Realizar uma Denúncia',
        },
        {
            label: '📝 Solicitar FAC/ORG',
            description: 'Solicite a posse de uma facção ou organização.',
            value: 'Realizar uma Solicitação de FAC/ORG',
        }
        ]
    },

    "allowlistcategories": {
        "categories": [{
            label: 'Allowlist Normal',
            description: 'Enviar uma Allowlist Normal para análise.',
            emoji: '<:905497149658234930:1038291371590701117>',
            value: 'Allowlist Normal',
        }]
    },
}