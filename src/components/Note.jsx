import { Card, CardHeader, Divider, Heading, CardBody, CardFooter, Text } from '@chakra-ui/react'
import moment from 'moment'

export default function Note({ title, description, createdAt }) {
	return (
		<Card variant={'filled'}>
			<CardHeader>
				<Heading size={'md'}>{title}</Heading>
			</CardHeader>
			<Divider borderColor={'green'} />
			<CardBody>
				<Text>{description}</Text>
			</CardBody>
			<Divider borderColor={'green'} />
			<CardFooter>{moment(createdAt).format("DD/MM/YYYY h:mm:ss")}</CardFooter>
		</Card>
	)
};

