package kafka

import (
	"encoding/json"
	ckafka "github.com/confluentinc/confluent-kafka-go/kafka"
	appRoute "github.com/vitorvasc/imersaofullcycle-simulator/application/route"
	kafkaInfra "github.com/vitorvasc/imersaofullcycle-simulator/infra/kafka"
	"log"
	"os"
	"time"
)

func Produce(msg *ckafka.Message) {
	producer := kafkaInfra.NewKafkaProducer()
	route := appRoute.NewRoute()

	err := json.Unmarshal(msg.Value, &route)
	if err != nil {
		log.Println(err.Error())
	}

	err = route.LoadPositions()
	if err != nil {
		log.Println(err.Error())
	}

	positions, err := route.ExportJsonPositions()
	if err != nil {
		log.Println(err.Error())
	}

	for _, p := range positions {
		err := kafkaInfra.Publish(p, os.Getenv("KafkaProduceTopic"), producer)
		if err != nil {
			log.Println(err.Error())
		}

		time.Sleep(time.Millisecond * 500)
	}
}
