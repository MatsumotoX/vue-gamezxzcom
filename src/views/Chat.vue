<template>
  <div id="chat" class="container">
    <h1>Vue School Chat Room</h1>
    <!-- Messages -->
    <div v-for="message in messages" class="card">
      <div class="card-body">
        <!-- nickname -->
        <h6 class="card-subtitle mb-2 text-muted">{{ message.nickname }}</h6>
        <!-- content -->
        <p v-if="message !== editingMessage" class="card-text">{{ message.text }}</p>
        <textarea v-else v-model="messageText" class="form-control"></textarea>
        <!-- actions -->
        <div v-if="message !== editingMessage">
          <a @click.prevent="deleteMessage(message)" href="#" class="card-link">delete</a>
          <a @click.prevent="editMessage(message)" href="#" class="card-link">edit</a>
        </div>
        <div v-else>
          <a @click.prevent="cancelEditing" href="#" class="card-link">cancel</a>
          <a @click.prevent="updateMessage" href="#" class="card-link">update</a>
        </div>
      </div>
    </div>

    <hr>
    <!-- New Message -->
    <form v-if="!editingMessage" @submit.prevent="storeMessage">
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
      nickname: "hootlex",
      editingMessage: null
    };
  },
  methods: {
    storeMessage() {
      messagesRef.push({ text: this.messageText, nickname: this.nickname });
      this.messageText = "";
    },
    deleteMessage(message) {
      messagesRef.child(message.id).remove();
    },
    editMessage(message) {
      this.editingMessage = message;
      this.messageText = message.text;
    },
    cancelEditing() {
      this.editingMessage = null;
      this.messageText = "";
    },
    updateMessage() {
      messagesRef
        .child(this.editingMessage.id)
        .update({ text: this.messageText });
      this.cancelEditing();
    }
  },
  created() {
    // value = snapshot.val() | key = snapshot.key
    messagesRef.on("child_added", snapshot => {
      this.messages.push({ ...snapshot.val(), id: snapshot.key });
      if (snapshot.val().nickname !== this.nickname) {
        nativeToast({
          message: `New message by ${snapshot.val().nickname}`,
          type: "success"
        });
      }
    });
    messagesRef.on("child_removed", snapshot => {
      const deletedMessage = this.messages.find(
        message => message.id === snapshot.key
      );
      const index = this.messages.indexOf(deletedMessage);
      this.messages.splice(index, 1);
      if (snapshot.val().nickname !== this.nickname) {
        nativeToast({
          message: `Message deleted by ${snapshot.val().nickname}`,
          type: "warning"
        });
      }
    });
    messagesRef.on("child_changed", snapshot => {
      const updatedMessage = this.messages.find(
        message => message.id === snapshot.key
      );
      updatedMessage.text = snapshot.val().text;
      if (snapshot.val().nickname !== this.nickname) {
        nativeToast({
          message: `Message edited by ${snapshot.val().nickname}`,
          type: "info"
        });
      }
    });
  }
};
</script>
