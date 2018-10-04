export class Drawing {
  id: string;
  image_url: string;
  description: string;
  interpretations: [{
    id: number,
    user_id: number,
    username: string,
    text: string
  }];
}
