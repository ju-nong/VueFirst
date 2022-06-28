<template>
    <Header></Header>
    <div class="wrap">
        <nav>
            <input
                type="text"
                placeholder="주제를 입력해주세요"
                ref="lblTopic"
                v-model="state.txtTopic"
            />
            <button @click="addTopic()">추가</button>
        </nav>

        <ul>
            <li
                v-for="(topic, topicIndex) in state.topicList"
                :key="topicIndex"
            >
                <h3>{{ topic.label }}</h3>
                <button class="removeBtn" @click="removeTopic(topicIndex)">
                    X
                </button>
                <input
                    type="text"
                    ref="lblItem"
                    placeholder="항목을 입력해주세요"
                />
                <button @click="addItem(topic, topicIndex)">추가</button>
                <ul>
                    <li
                        v-for="(item, itemIndex) in topic.list"
                        :key="itemIndex"
                        @click="removeItem(topic, itemIndex)"
                    >
                        {{ item }}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    <Footer></Footer>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

import { reactive, ref } from "vue";

export default {
    components: {
        Header,
        Footer,
    },
    setup() {
        const lblTopic = ref();
        const lblItem = ref();

        const state = reactive({
            txtTopic: "",
            topicList: [
                { label: "좋아하는 음식", list: ["치킨", "피자", "탕수육"] },
            ],
        });

        const addTopic = () => {
            lblTopic.value.focus();
            if (state.txtTopic == "") {
                alert("주제를 입력해주세요");
                return;
            }
            state.topicList.push({ label: state.txtTopic, list: [] });
            state.txtTopic = "";
        };

        const removeTopic = (index) => {
            state.topicList.splice(index, 1);
        };

        const addItem = (topic, index) => {
            const input = lblItem._value[index];
            input.focus();
            const item = input.value;

            if (item == "") {
                alert("항목을 입력해주세요");
                return;
            }

            topic["list"].push(item);
            input.value = "";
        };

        const removeItem = (topic, itemIndex) => {
            topic["list"].splice(itemIndex, 1);
        };

        return {
            lblTopic,
            lblItem,
            state,
            addTopic,
            removeTopic,
            addItem,
            removeItem,
        };
    },
};
</script>

<style lang="scss" scoped>
.basic {
    text-align: center;
    background-color: #eee;
    padding: 30px;
}

.wrap {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    nav {
        text-align: right;
        padding: 10px;

        input {
            line-height: 30px;
            padding-left: 5px;
        }

        button {
            padding: 3px 5px;
            cursor: pointer;
            margin: 2px;
        }
    }

    > ul {
        display: flex;
        flex-direction: row;
        flex: 1 1;
        flex-wrap: wrap;
        > li {
            width: 33.333%;
            padding: 10px;
            border-radius: 10px;
            border: 1px solid #eee;
            transition: all 0.5s;
            cursor: pointer;
            position: relative;

            h3 {
                text-align: center;
            }

            .removeBtn {
                position: absolute;
                top: 5px;
                right: 5px;
                border: 0;
                background: 0;
                font-size: 24px;
                font-weight: bold;
                color: #ff0000;
            }
        }
        > li:hover {
            box-shadow: 3px 5px 5px #000;
        }
    }
}
</style>
