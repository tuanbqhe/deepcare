import { kafkaTopics } from './../../../configs/kafka_topic'
import { userAction } from '../deepcare_action/user.action'

export const kafkaHandler = async (message, topic) => {
  switch (topic) {
    case kafkaTopics.deepcare.lay_benh_nhan:
      await userAction(message)
      break
  }
}
