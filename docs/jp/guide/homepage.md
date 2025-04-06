## "府中サロン"ホームページ

情報管理と表示には [wordpress 6.7](https://wordpress.org/download/releases/6-7/) を採用しています。テーマには [Devotion Pro](https://flythemes.net/wordpress-themes/devotion-lite-wordpress-theme/) を使用しています。

サーバーは https://lolipop.jp/ が提供する wordpress サービスを利用しています。

## devotion pro theme のインストール

最近、「府中」サロン組織は [Devotion Pro](https://flythemes.net/wordpress-themes/devotion-lite-wordpress-theme/) の WordPress テーマを使用することを決定しました。テーマのインストールについて、以下の点に注意が必要です：

`devotion-pro.zip` テーマパッケージを入手後、WordPress 管理画面のテーマインストールで、テーマのアップロードを選択し、`devotion-pro.zip` パッケージを選択してインストールするだけです。

インストール完了後、テーマの使用に早く慣れるために、デモデータをインポートする必要があります。

テーマのインストール完了後、このテーマが推奨する WordPress プラグインのインストールを促すメッセージが表示されます。そのまま選択してインストールしてください。その中の 1 つは `Devotion Pro Demo Importer` プラグインで、このプラグインを使用してデモデータをインポートすることができます。

`Devotion Pro Demo Importer` プラグインをインストールした後、WordPress 管理画面の左側メニューで、外観 -> デモデータのインポートを選択し、[`devotion.WordPress.2023-12-04.xml`](../files/devotion.WordPress.2023-12-04.xml) と [`flydemos.net-devotion-widgets.wie`](../files/flydemos.net-devotion-widgets.wie) の 2 つのファイルを選択してインポートします。

デモデータのインポート後、メニューとホームページの設定を行うことができます。

## ページ設定

### ホームページ

ページタイプの新しいページを作成し、「ホームページ」として、以下の内容を追加します：

```
[introduction image="http://fuchuu2dev.local/wp-content/themes/devotion-pro/images/about.jpg" image_position="left" sub_title="Joyful Harvest" title="Reaping Joy in God's Abundance" btn_text="Visit this Sunday" btn_link="#"] Maecenas tincidunt, mi quis rutrum feugiat, felis enim sagittis metus, nec molestie nunc sapien a risus. Mauris a orci cursus, fringilla elit in, laoreet elit. Aliquam fringilla tempor nunc ut auctor. Curabitur nunc nisi, imperdiet sed tincidunt a, luctus at libero.

Vivamus tempus accumsan erat, at sollicitudin justo elementum vitae. Nullam tempor malesuada aliquam. Donec ligula nulla, cursus id posuere sit amet, sodales vel quam. Proin fermentum, sem vitae vestibulum posuere, eros felis pulvinar velit, et maximus sem felis non purus.[/introduction]


[hr]
[section_title sub_title="Latest event" title="Events" section_text="latest event list"]
[events show="3" type="grid" column="3"][button name="See All Events" align="center" link="/myevent1002/"]

[hr]
[latest-news show="3" type="grid" column="3" comment="show" date="show" author="show" category="show"]
```

### イベントリスト

ページタイプの新しいページを作成し、「イベント」リストページとして、以下の内容を追加します：

```
[events show="-1" type="grid" column="3"]
```

その後、イベントリストページのリンクを「ホームページ」のリンクに更新します。

### 一部の会議議事録エリア

ホームページの指定位置に、以下の内容を追加します：

```
[pwd-pdf-list show="6"]
```

### 会議議事録テーブル

ページタイプの新しいページを作成し、以下の内容を追加します：

```
[pwd-pdf-table show="10"]
```

### アクティビティページ

現在、アクティビティページは記事のカテゴリーを使用して実装されています。そのため、まず記事カテゴリーを作成し、記事の編集時にそのカテゴリーを設定するだけです。

## 「府中サロン」ホームページのサーバーファイル設定

旧バージョンのホームページは以下の画像のようになっています：

![oldHomePage1](../../images/image-5.png)

FileZilla ソフトウェアを使用して、lolipop で購入した WordPress サービスに対応するサーバープログラムのデフォルトエントリーファイルを新しい WordPress エントリーファイルに変更することで、`https://fuchukokusai.com/`にアクセスした際に新しい WordPress ページが表示されるようになります。

FileZilla ソフトウェアがない場合は、[公式サイトからダウンロード](https://download.filezilla-project.org/client/FileZilla_3.68.1_win64_sponsored2-setup.exe)できます。インストール完了後、lolipop に対応する FTP サービスサイトを追加します。

`fuchuu` という名前で追加した FTP サイトを開きます：

![filezilla1](../../images/image-4.png)

（FTP サイトのアカウントとパスワードがない場合は、「@sueda さん」に確認してください）

接続すると、`fuchukokusai.com` という名前のフォルダがロードされます。ホームページのサーバープログラムファイルはこの中に保存されており、エントリーファイルは `index.html` です。

![indexFileShow1](../../images/image-6.png)

`index.html` は旧ホームページのエントリーファイルです。WordPress をホームページとして使用する場合は、`index.html` のファイル名を別の名前に変更するだけです（index.html 以外であれば何でも構いません）。例えば、`index.html.backup` に変更できます。その後、ブラウザで `https://fuchukokusai.com/` ページを更新すると、新しいホームページに切り替わっていることが確認できます。以下の画像のようになります：

![newHomePage1](../../images/image-3.png)

### 旧バージョンのホームページに戻す

インターネットユーザーに旧バージョンのウェブページを表示させたい場合は、`index.html.backup` ファイルの名前を `index.html` に戻すだけです。その後、ブラウザでウェブサイトのホームページを**更新**してください。
