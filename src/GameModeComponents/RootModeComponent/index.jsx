import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from 'react-native';

import ButtonComponent from "../../ButtonComponent";
import PrefixComponent from "../../PrefixComponent";
import RootComponent from "../../RootComponent";
import SufixComponent from "../../SufixComponent";

import data from '../../../data.json';
import words from '../../../words.json';
import * as util from '../../../utils';


export default RootModeComponent = () => {

    const [finalText, setFinalText] = useState("");
    const [definition, setDefinition] = useState("");
    const [root, setRoot] = useState("");
    const [prefix, setPrefix] = useState("");
    const [sufix, setSufix] = useState("");

    const [disabled, setDisabled] = useState(true);


    const [visible, setVisible] = useState(false);
    const [legend, setLegend] = useState(false);

    const [visiblePrefix, setVisiblePrefix] = useState(true);
    const [visibleSufix, setVisibleSufix] = useState(true);


    useEffect(() => {
        const random = util.randomArrayValue(data.data);
        setRoot(random.root);

        setTimeout(() => {
            setDisabled(false);
        }, 3000)
    }, [])

    const handlePress = () => {
        setFinalText("");
        setLegend(false);
        setDisabled(true);
        setVisible(true);

        const rootRandom = util.randomArrayValue(data.data);

        const prefixRandom = util.randomPrefixValue(rootRandom);
        setPrefix(prefixRandom.pre);

        const sufixRandom = (prefixRandom?.sufix) ? util.randomSufixValue(prefixRandom.sufix) : "";
        setSufix(sufixRandom);

        (prefixRandom.pre == "") ? setVisiblePrefix(false) : setVisiblePrefix(true);
        (sufixRandom == "") ? setVisibleSufix(false) : setVisibleSufix(true);

        const createdWord = words.map((w) => {
            if (w.word === (prefixRandom.pre + rootRandom.root + sufixRandom)) {
                return w.definition;
            }
        })

        setTimeout(() => {
            setDefinition(createdWord);
            setFinalText(prefixRandom.pre + rootRandom.root + sufixRandom);
            setDisabled(false);
            setLegend(true);
        }, 3000)

    };

    return (
        <View style={styles.container}>

            <View style={styles.row}>
                <Text style={styles.text}>{finalText}</Text>
            </View>


            <View style={styles.row}>
                {visiblePrefix ?
                    <View style={[styles.box, styles.box2]}>
                        {visible ? <PrefixComponent textValue={prefix} /> : null}
                    </View> : ""
                }

                <View style={[styles.box]}>
                    <RootComponent textValue={root} />
                </View>

                {visibleSufix ?
                    <View style={[styles.box, styles.box3]}>
                        {visible ? <SufixComponent textValue={sufix} /> : null}
                    </View> : ""
                }
            </View>

            <View style={styles.row}>
                <View style={[styles.button]}>
                    <ButtonComponent onPress={handlePress} disabled={disabled} />
                </View>
            </View>

            {legend ?
                <View style={styles.content}>

                    {visiblePrefix ?
                        <View style={styles.row}>
                            <Text style={[styles.box, styles.box2, styles.legend]}>Prefix: {prefix}</Text>
                        </View> : ""}

                    <View style={styles.row}>
                        <Text style={styles.legend}>Root: {root}</Text>
                    </View>

                    {visibleSufix ?
                        <View style={styles.row}>
                            <Text style={styles.legend}>Sufix: {sufix}</Text>
                        </View> : ""}

                    <View style={styles.row}>
                        <Text style={styles.legend}>Definition: {definition}</Text>
                    </View>
                </View> : ""
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        padding: 30,
    },
    row: {
        flexDirection: 'row',
    },
    button: { margin: 10 },
    text: { margin: 30, fontWeight: "bold", fontSize: 30, color: "black" },
    box: {
    },
    box2: {
    },
    box3: {
    },
    two: {
        flex: 2
    },
    legend: {
        fontWeight: "bold", fontSize: 30, color: "black"
    }
});