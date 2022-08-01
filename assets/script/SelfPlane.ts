import {
  _decorator, Component, Node,
  systemEvent, SystemEvent,
  Touch, EventTouch
} from 'cc'

const { ccclass, property } = _decorator

@ccclass('SelfPlane')
export class SelfPlane extends Component {
  @property
  public speed = 10

  start () {
    systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this._touchMove, this)
  }

  private _touchMove (touch: Touch, event: EventTouch) {
    const delta = touch.getDelta()
    let pos = this.node.position
    this.node.setPosition(pos.x + 0.01 * this.speed * delta.x, pos.y, pos.z - 0.01 * this.speed * delta.y)
  }
}
