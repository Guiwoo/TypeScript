{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo2(id: string): Video {
    return {
      id,
      title: "Vidoe",
      url: "Httpss://",
      data: "byte-data..",
    };
  }
  type VideoMetaData = Pick<Video, "id" | "title">;
  function getVideoMetadata2(id: string): VideoMetaData {
    return {
      id: id,
      title: "title",
    };
  }
}
