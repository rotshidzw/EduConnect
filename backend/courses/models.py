import uuid

from django.contrib.auth import get_user_model
from django.db import models
from django.utils.translation import gettext_lazy as _


# Course, Assignment, Quiz, Question, Answer, Submission, Grade


class Course(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    course_name = models.CharField(_("Course Name"), max_length=100)
    course_code = models.CharField(_("Course Code"), max_length=100)
    course_description = models.TextField(
        _("Course Description"), blank=True, null=True
    )
    course_image = models.ImageField(
        _("Course Image"), upload_to="course-images/", blank=True, null=True
    )
    instructors = models.ManyToManyField(
        get_user_model(), verbose_name=_("Instructors"), related_name="instructors"
    )

    def __str__(self):
        return self.course_name
