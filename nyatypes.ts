// 位置和尺寸
export interface NyaRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

// 方向
export enum NyaDirection {
  top, // ↑
  right, // →
  bottom, // ↓
  left, // ←
  topLeft, // ↖
  topRight, // ↗
  bottomRight, // ↘
  bottomLeft, // ↙
  topBottom, // ↑↓
  leftRight, // ←→
  topRightBottomLeft, // ↗↙
  topLeftBottomRight, // ↖↘
  towards, // ·
  towardsTop, // ·↑
  towardsRight, // ·→
  towardsBottom, // ·↓
  towardsLeft, // ·←
  away, // ×
  awayTop, // ×↑
  awayRight, // ×→
  awayBottom, // ×↓
  awayLeft, // ×←
  center, // ＋
  none,
}
