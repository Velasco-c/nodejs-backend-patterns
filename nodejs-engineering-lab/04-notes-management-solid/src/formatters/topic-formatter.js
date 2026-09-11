export class TopicFormatter {
    format(topic) {
        return {
            id: topic.id,
            course: topic.course,
            code: topic.code,
            title: topic.title,
            description: topic.description,
            active: topic.active
        };
    }
}