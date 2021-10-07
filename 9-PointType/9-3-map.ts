{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  type OPtional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = OPtional<Video>;

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };

  // example
  type Nullalbe<T> = {
    [P in keyof T]: T[P] | null;
  };
}
