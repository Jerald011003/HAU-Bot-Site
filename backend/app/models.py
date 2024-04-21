from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

class React(models.Model):
    chatmessages = models.TextField() 
    questions = models.CharField(max_length=200)  

    def save(self, *args, **kwargs):

        self.questions = self.questions.lower()
        super(React, self).save(*args, **kwargs)

    def get_chat_messages_paragraph(self):

        return self.chatmessages

    class Meta:
        verbose_name = "Chatbot" 