# 安定した Node.js イメージを使用
FROM node:23

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# ソースコードをコンテナにコピー
COPY . /usr/src/app

# 必要なポートを公開
EXPOSE 3000

# デフォルトのコマンドを設定（ts-node を利用）
CMD ["npm", "run", "dev"]
