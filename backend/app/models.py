from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

class React(models.Model):
    chatmessages = models.CharField(max_length=30)
    questions = models.CharField(max_length=200)  # Added new field

    def save(self, *args, **kwargs):
        # Convert the questions field to lowercase before saving
        self.questions = self.questions.lower()
        super(React, self).save(*args, **kwargs)

    class Meta:
        verbose_name = "Chatbot"  # Change the verbose name of the model to "Chatbot"