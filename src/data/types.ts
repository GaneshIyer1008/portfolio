// Shared content types.
//
// To highlight a video on a project/experience, set its `video` field to ONE of:
//   video: { youtubeId: 'XXXXXXXXXXX' }                 // a single YouTube video
//   video: { playlistId: 'PLxxxxxxxxxxxxxxxx' }          // a YouTube playlist
// You can find the id in the URL:
//   https://youtu.be/Kl71MqVsgZI               -> youtubeId: 'Kl71MqVsgZI'
//   https://youtube.com/playlist?list=PL9Lvg.. -> playlistId: 'PL9Lvg..'
// If a video isn't ready yet, leave `video` out and set `videoSoon: true`.
// To show a still image instead of a video, drop the file in `public/` and set
//   image: 'voronoi.png'   (the filename in public/)

export type Video = { youtubeId: string; title?: string } | { playlistId: string; title?: string };

export interface Link {
  label: string;
  href: string;
}
