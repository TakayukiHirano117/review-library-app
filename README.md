レイヤードアーキテクチャの実装パターンを簡単な図書館アプリのAPI開発を通して復習している。

現状の設計では、ビジネスロジック層がデータアクセス層に依存している・サービスクラスが肥大化しやすい・prismaから直接importして使用しているBookクラスがあるが、ORMライブラリを変更すると、その個所をすべて修正しなくてはいけないなどの問題点がある。
設計・アーキテクチャむずいけど楽しい。

1回目講座を見たときは何となくしか理解できなかったが、2回目で結構わかるようになってきた。
これからクリーンアーキテクチャへのリファクタリングを通して、
レイヤードアーキテクチャの問題点・クリーンアーキテクチャで何がどうよくなるのかを意識して復習していきたい。
