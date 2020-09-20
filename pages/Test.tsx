const Test = () => {
  interface User {
    name: string;
    age: number;
  }

  const foo: boolean = true;

  const abc: User = {
    name: 'seokki',
    age: 780,
  };

  return (
    <div className="flex">
      이름: {foo ? abc.name : ''} 나이: {abc.age}
    </div>
  );
};

export default Test;
