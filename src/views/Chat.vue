<template>
  <div id="chat">
    <h1>Chat Room</h1>
    <!-- Messages -->
    <div class="chat-body">
      <div v-for="message in messages.slice(messages.length-20)" :key="message.id" class="card">
        <div class="card-body">
          <!-- nickname -->
          <p>
            <b class="c-white">
              <span v-if="message.member">
                <i class="fa fa-user-circle-o text-warning"></i>
              </span> {{ message.nickname }}:</b> {{ message.text }}
            <span class="pull-right">{{ timestampToDate(message.time) }}</span>
          </p>

        </div>
      </div>
    </div>
    <hr>
    <!-- New Message -->
    <form @submit.prevent="storeMessage">
      <div class="form-group">
        <label>Message:</label>
        <textarea v-model="messageText" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label>Nickname:</label>
        <input v-model="nickname" class="form-control" />
      </div>
      <button class="btn btn-primary">Send</button>
    </form>
  </div>
</template>

<script>
import nativeToast from "native-toast";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCH6dlJsTPHCGIWrnLadtSo4aUq-YbsUwA",
  authDomain: "gamezxz-c2be1.firebaseapp.com",
  databaseURL: "https://gamezxz-c2be1.firebaseio.com",
  projectId: "gamezxz-c2be1",
  storageBucket: "gamezxz-c2be1.appspot.com",
  messagingSenderId: "1099416148640"
};

// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database();
const messagesRef = database.ref("messages");

export default {
  name: "Chat",
  data() {
    return {
      messages: [],
      messageText: "",
      nickname: "",
      time: "",
      member: false,
      editingMessage: null
    };
  },
  methods: {
    storeMessage() {
      messagesRef.push({
        text: this.messageText,
        nickname: this.nickname,
        time: Date.now().toString(),
        member: this.$store.state.authUser ? true : false
      });
      this.messageText = "";
    },
    timestampToDate(UNIX_timestamp) {
      var a = new Date(UNIX_timestamp * 1);
      var hour = a.getHours() < 10 ? "0" + a.getHours() : a.getHours();
      var min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
      var time = hour + ":" + min;
      return time;
    }
  },
  created() {
    // value = snapshot.val() | key = snapshot.key
    messagesRef.on("child_added", snapshot => {
      this.messages.push({ ...snapshot.val(), id: snapshot.key });
      this.nickname = this.$store.state.authUser
        ? this.$store.state.authUser.displayName
        : "anonymous" + Math.floor(Math.random() * 1000);
      if (snapshot.val().nickname !== this.nickname) {
        nativeToast({
          message: `New message by ${snapshot.val().nickname}`,
          position: "top",
          timeout: 3000,
          type: "success"
        });
      }
    });
  }
};
</script>
