package main

import (
	"fmt"
	ckafka "github.com/confluentinc/confluent-kafka-go/kafka"
	"github.com/joho/godotenv"
	kafkaApp "github.com/vitorvasc/imersaofullcycle-simulator/application/kafka"
	kafkaInfra "github.com/vitorvasc/imersaofullcycle-simulator/infra/kafka"
	"log"
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("error loading .env file")
	}
}

func main() {
	msgChan := make(chan *ckafka.Message)
	consumer := kafkaInfra.NewKafkaConsumer(msgChan)
	go consumer.Consume()

	for msg := range msgChan {
		go kafkaApp.Produce(msg)
		fmt.Println("New route started:", string(msg.Value))
	}
}
