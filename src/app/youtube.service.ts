import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
playlist = [
  {id: 'gOvEiq7qsuE', song: 'DJ SUMMERTIME × KIMI NO TORIKO REMIX - DJ Rizky Modeong'},
  {id: 'xSlEK1SIC8E', song: 'Đi Cùng Em (Andy Remix) - Hà Tròn ft. Lemon Climb Nhạc Trẻ Remix 2020 Cực Phiêu'},
  {id: '-8BxdAiyLJU', song: 'Khóc Cho Người Ai Khóc Cho Anh (Orinn Remix) - Gia Huy, Tvk '},
  {id : 'P3h_HY5QEas', song: 'Đóa Quỳnh Lan ( Htrol Remix ) H2k ft Yuni Boo'},
  {id: 'Sbe6BNERgSE', song: 'Hôm Nay Là Thứ Bảy Anh Thích Thích Vào Bar Nhạc Lên Là Em Nhảy (MC LongB) - Bibo Remix - 2020'},
  {id: 'sTC7qJJkPI4', song: 'Vì Em ! Anh Nguyện Làm Bầu Trời Nắng Hạ ( Jack ) Htrol Remix '},
  {id: 'SCX3iJJ_IUI', song: 'Hoa Nở Không Màu ( BD Remix) Hoài Lâm - Nhạc Trẻ Remix'},
  {id: 'vlV5aJNJYrM', song: 'Bạn Tình Ơi Remix ( Htrol Remix) -Yuni Boo ft. Goctoi Mixer'}
  ];
  constructor() { }
  // tslint:disable-next-line:typedef
  find(id: string){
   return this.playlist.find(item => item.id === id);
  }
}
