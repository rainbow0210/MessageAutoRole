require('dotenv').config()
const { token } = process.env
const { Client, GatewayIntentBits, User, DMChannel, PartialGroupDMChannel } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders'); //SlashCommandBuilderを読み込む
const { REST } = require('@discordjs/rest'); //RESTを読み込む
const { Routes } = require('discord-api-types/v9'); //Routesを読み込む
const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages],
});

//起動確認用
client.once('ready', () => {
    console.log(`${client.user.tag} Ready`);
    client.user.setPresence({ activities: [{ name:'Authorization' }] }); // 「...をプレイ中」のステータスメッセージの表示
});

//応答
//コマンドに応答する処理はここにまとめる

const password = "your_keyword"; //パスワードを代入、単純なものではなく、複雑なもので覚えづらいものの方が良い。
                             //→　このプログラムの使用上削除に一定の時間がかかり、パスワードが覚えられてしまう可能性があるから。

client.on('messageCreate', async message => {

    if (message.author.bot) { //Botのメッセージには反応しないようにする
        return;
    }

    console.log('UserID出力確認：' + message.author.id);

    if (message.content === password) { // 設定したpasswordと一致したものが来た時の処理
        message.delete(); //パスワードバレ防止のため、メッセージを削除する

        let role = message.guild.roles.cache.find(roles => roles.name === '認証失敗')
        if (message.member.roles.cache.has(role.id)){
            client.users.cache.get(message.author.id).send({ //UserIDを習得してDMに認証結果を送信
            embeds: [{
                title: '認証エラー!',
                fields: [{ name: '認証失敗ロールがついています...', value: '運営にお問合せください。' },],
                color: 0xffffff,
            }]}
            );
        }
        else{
            message.member.roles.add('role_id_1') //ここに自動付与して欲しいロールのIDを入れておく
            .then(console.log)
            .catch(console.error);
            client.users.cache.get(message.author.id).send({ //UserIDを習得してDMに認証結果を送信
            embeds: [{
                title: '認証完了!',
                fields: [{ name: '認証が完了しました！', value: '大会開催までしばらくお待ちください。' },],
                color: 0xffffff,
            }]}
            );
        }
    }
    else{
        message.delete(); //パスワードバレ防止のため、メッセージを削除する

        role = message.guild.roles.cache.find(roles => roles.name === '認証失敗')
        if (message.member.roles.cache.has(role.id)){
            client.users.cache.get(message.author.id).send({ //UserIDを習得してDMに認証結果を送信
            embeds: [{
                title: '認証エラー!',
                fields: [{ name: '認証失敗ロールがついています...', value: '運営にお問合せください。' },],
                color: 0xffffff,
            }]}
            );
        }
        else{
            message.member.roles.add('role_id_2');
            client.users.cache.get(message.author.id).send({ ////UserIDを習得してDMに認証結果を送信
                embeds: [{
                    title: '認証失敗...',
                    fields: [{ name: '認証に失敗しました...。', value: '安全のため試行回数を1回に制限させていただいております、お手数ですが運営までお問合せください。' },],
                    color: 0xffffff,
                }]}
            );
        }
    }
});

//Discordへの接続
client.login(token);
