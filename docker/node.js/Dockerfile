# 安定した Node.js イメージを使用
FROM node:23

# Git をインストール
RUN apt-get update && apt-get install -y git

# 作業ディレクトリを設定
WORKDIR /usr/src/app/src

EXPOSE 4001

# デフォルトのコマンドを設定（ts-node を利用）
CMD ["npm", "run", "dev"]
