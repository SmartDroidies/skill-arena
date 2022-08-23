import React from "react";
import { StyleSheet, Image, FlatList, } from "react-native";
import { Text, Card } from "@rneui/themed";

const courses = [
    {
        id: 1,
        title: "course 1 Title",
        author: "First Author",
        price: "Rs 500",
        image: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg",
    },
    {
        id: 2,
        title: "course 2 Title",
        author: "Second Author",
        price: "Rs 600",
        image: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg",
    },
    {
        id: 3,
        title: "course 3 Title",
        author: "Third Author",
        price: "Rs 750",
        image: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg",
    },
    {
        id: 4,
        title: "course 4 Title",
        author: "Final Author",
        price: "Rs 1000",
        image: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg",
    },
];

const Course = ({ course }) => (
    <Card>
        <Card.Title>{Course.title}</Card.Title>
        <Card.Divider />
        <Image
            style={styles.image}
            resizeMode="cover"
            source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
        />
        <Text style={styles.fonts} h4>
            {Course.author}
        </Text>
        <Text style={styles.fonts}>{Course.price}</Text>
    </Card>
);


const course = () => {
    const renderCourseCard = ({ item }) => <Course Course={item} />;

    return (
        <>
            <Text h4>Welcome to Course World</Text>
            <FlatList
                horizontal={true}
                data={course}
                renderItem={renderCourseCard}
                keyExtractor={(item) => item.id}
            />
        </>
    );
};



const styles = StyleSheet.create({
});

export default Course;