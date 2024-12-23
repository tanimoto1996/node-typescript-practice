interface Tanimoto {
  name: string;
  flavor: string;
  kami?(): string;
}

const obj: Tanimoto = {
  name: '天才',
  flavor: 'iiii',
  kami: () => {
    return '谷本'
  }
}

console.log(obj.name);
