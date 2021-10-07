{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id,
      title: "Vidoe",
      url: "Httpss://",
      data: "byte-data..",
    };
  }
  type VideoMetaData2 = Omit<Video, "url" | "data">;
  function getVideoMetadata(id: string): VideoMetaData2 {
    return {
      id: id,
      title: "title",
    };
  }
}
