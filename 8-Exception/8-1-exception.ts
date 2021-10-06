// Java: Exception
// Javascript: Error

// Error Handleing : try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "Not exist") {
    throw new Error(`file not exsit ${fileName}`);
  }
  return `file contents`;
}

function closeFile(file: string) {
  //
}

function run() {
  const fileName = "Not exist";
  try {
    // 에러가 발생할꺼 같은거만 여기다가 넣으세요 지저분하게 만들지말구
    console.log(readFile(fileName));
  } catch (e) {
    console.log("catched!!");
  } finally {
    closeFile(fileName);
    console.log("Done!!");
  }
  console.log("!!!!!!");
}

run();
