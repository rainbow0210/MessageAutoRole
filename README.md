# Dicord_MessageAutoRole
Sorry, Source code comment out and message in Japanese...

## Download
[Click](https://github.com/rainbow0210/MessageAutoRole/archive/refs/heads/main.zip)

## Table of contents
[Japanese](https://github.com/rainbow0210/MessageAutoRole#japanese)

[English](https://github.com/rainbow0210/MessageAutoRole#english)

# Japanese

## 使用言語
JavaScript

## 動作確認済み環境
npm

Node.js v18

discord.js

## 概要

Discord上で動作する、設定した合言葉に対して、認証に成功すれば成功用のロールを、失敗すれば失敗用のロールを自動付与するbotです。

## 動作方法
1. Discordのアカウントが必要なため、アカウントを作成してください。
また、Botを動かすのにトークン等が必要なため、下記URLを参照にBotの作成、取得をしてください。

* [https://dot-blog.jp/news/discord-bot-token/](https://dot-blog.jp/news/discord-bot-token/)

2. 展開されたZipファイルから出てくる「MessageAutoRole-main」というファイルの中に「.env」というファイルがあるため、テキストエディタで開いて、「your_discord_bot_token」という部分を取得したBotのトークンを入れてください。

3. 「src」フォルダの中の「index.js」をテキストエディタで開き、「your_password」に設定したい合言葉を。そして、「role_id_1」と「role_id_2」を付与したいロールのIDに書き換えてください。
* 参考サイト:[https://note.com/bardbot/n/na70832cb70a3](https://note.com/bardbot/n/na70832cb70a3)

4. 動作させるのにNode.jsが必要なため下記URLよりインストールします。

* [https://nodejs.org/ja/](https://nodejs.org/ja/)

5. 展開されたZipファイルの中の「MessageAutoRole-main」にターミナル（Mac,Linux）やコマンドプロンプトで（Windows）移動し、「npm install」を打った後に、「Node src/index.js」と打つとプログラムが起動し、Discord上でBotが立ち上がります。

6. botを招待し、権限の設定で認証用で使う以外のチャンネルをbotが見れないように権限を調整します。

7. 認証用チャンネルで入力し、無事に認証され、DMに何かしらの反応があれば成功です。

## 利用したもの、参考にしたサイト

* Node.js：[https://nodejs.org/ja/](https://nodejs.org/ja/)

* discord.js：[https://discord.js.org/](https://discord.js.org/)

* Dotenv：[https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)

* Discord.js Japan User Group：[https://scrapbox.io/discordjs-japan/](https://scrapbox.io/discordjs-japan/)

# English
## Use Language
JavaScript

## Operationg environment
npm

Node.js v18

discord.js

## Expanation

The bot work on the discord.

Message match to set keyword, and bot give role.

## How to use?

1. Discord account create. Bot work token. Because of that, discord bot create and get the code. Please refer to the following. (※Sorry, Japanese Website)

* Discord bot token : [Google translate this site](https://dot--blog-jp.translate.goog/news/discord-bot-token/?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

2. Zip File unzip. "MessageAutoRole-main" folder open, and ".env" file open in text editor. (Visual Studio code etc...) "your_discord_bot_token" write my discord bot token. "src" foleder open, and "index.js" file open in text editor. Source code search "auth_key: 'your_auth_key'". "your_auth_key" write my deepl API key.

3. Open "src" folder. and, "index.js" file open text editor.(Visual Studio code etc...)

4. "role_id_1" and "role_id_2" write to use role id. "your_password" write to use keyword.(※Sorry, Japanese Website)
* Refer site:[Google translate this site](https://note.com/bardbot/n/na70832cb70a3?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

5. Node.js need. Please refer to the following.

* [https://nodejs.org/en/](https://nodejs.org/en/)

6. "MessageAutoRole-main" directory open Terminal(Mac, Linux) or Command Prompt. Typing command "npm install". Next, typing command "node src/index.js", start bot.

7. invite bot. and, Adjust the permissions so that the bot cannot see channels other than those used for authentication in the permission settings.(use Deepl translate)

8. Enter the information in the authentication channel, and if it is successfully authenticated and the DM responds in some way, you have succeeded.(use Deepl translate)

## Extension library and use data

* Node.js：[https://nodejs.org/en/](https://nodejs.org/en/)

* discord.js：[https://discord.js.org/](https://discord.js.org/)

* Dotenv：[https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)

* Discord.js Japan User Group：[https://scrapbox.io/discordjs-japan/](https://scrapbox.io/discordjs-japan/)
