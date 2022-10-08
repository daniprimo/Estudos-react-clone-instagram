import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
    SafeAreaView,
    ActivityIndicator,
} from 'react-native';
import api from '../../service/api';

import { styles } from './styles';

export default function Feed() {
    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    async function loadPage() {
        if (loading) return;

        setLoading(true);

        const { data } = await api.get(`/feed?_expand=author`);

        setLoading(false);

        setFeed(data);
    }

    async function refreshList() {
        setRefreshing(true);

        await loadPage();

        setRefreshing(false);
    }

    useEffect(() => {
        loadPage();
    }, []);

    return (
        <>
            <SafeAreaView style={styles.container}>
                <FlatList
                    key="list"
                    data={feed}
                    KeyExtractor={(item) => String(item.id)}
                    ViewabilityConfig={{
                        ViewAreaCoveragePercentThreshold: 10,
                    }}
                    showsVerticalScrollIndicator={false}
                    onRefresh={refreshList}
                    refreshing={refreshing}
                    ListFooterComponent={
                        <ActivityIndicator size="small" color="#999" />
                    }
                    renderItem={({ item }) => (
                        <View>
                            <View style={styles.Header}>
                                <Image
                                    style={styles.Avatar}
                                    source={{ uri: item.author.avatar }}
                                />
                                <Text style={styles.Text}>
                                    {item.author.name}
                                </Text>
                            </View>

                            <Image
                                aspectRatio={item.aspectRatio}
                                smallSource={{ uri: item.small }}
                                source={{ uri: item.image }}
                            />

                            <Text style={styles.Description}>
                                <Text style={styles.Name}>
                                    {item.author.name}
                                </Text>
                                {item.description}
                            </Text>
                        </View>
                    )}
                />
                <Text style={styles.title}>
                    IIIIIAAAAEEEE PORRRAAA, tamo no feed
                </Text>
            </SafeAreaView>
        </>
    );
}
