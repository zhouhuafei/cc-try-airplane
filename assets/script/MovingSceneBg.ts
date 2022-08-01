import { _decorator, Component, Node } from 'cc'

const { ccclass, property } = _decorator

@ccclass('MovingSceneBg')
export class MovingSceneBg extends Component {
  @property(Node)
  public bg1: Node = null
  @property(Node)
  public bg2: Node = null

  private _bgSpeed = 10
  private _bgRange = 90

  start () {
    this._init()
  }

  update (deltaTime: number) {
    this._movingBackground(deltaTime)
  }

  private _init () {
    this.bg1.setPosition(0, 0, 0)
    this.bg2.setPosition(0, 0, -this._bgRange)
  }

  private _movingBackground (deltaTime: number) {
    this.bg1.setPosition(0, 0, this.bg1.position.z + this._bgSpeed * deltaTime)
    this.bg2.setPosition(0, 0, this.bg2.position.z + this._bgSpeed * deltaTime)

    if (this.bg1.position.z > this._bgRange) {
      this.bg1.setPosition(0, 0, this.bg2.position.z - this._bgRange)
    } else if (this.bg2.position.z > this._bgRange) {
      this.bg2.setPosition(0, 0, this.bg1.position.z - this._bgRange)
    }
  }
}
