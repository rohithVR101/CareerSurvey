from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from .models import Entry
from django.core.mail import send_mail
import json

# Create your views here.
def main_survey(request):
    return render(request, 'survey/index.html', {})

@csrf_exempt
def submit_survey(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        entry = Entry()
        entry.first_name = data["first-name"]
        entry.last_name = data["last-name"]
        entry.email_id = data["email-id"]
        entry.dob = data["dob"]
        entry.education = data["education"]
        entry.company_name = data["company-name"]
        entry.designation = data["designation"]
        entry.current_skills = data["current-skills"]
        entry.aspiring_skills = data["aspiring-skills"]
        entry.aspiring_role = data["aspiring-role"]
        entry.dream_company = data["dream-company"]
        entry.confirm_help = data["confirm-help"]
        if(data["confirm-help"] == "True"):
            entry.confirm_signup = data["confirm-signup"]
            if(data["confirm-signup"] == "True"):
                entry.password = data["password"]
            else:
                entry.password = ""
        else:
            entry.confirm_signup = "False"
        entry.save()



        send_mail(
            'Thanks for completing the Survey!',
            'Hello {} {}.\n We really appreciate you in taking the next step towards your career. Thanks for submitting the survey successfully.'.format(data["first-name"], data["last-name"]),
            'rohithriaz11@gmail.com',
            [data["email-id"]],
            fail_silently=False,
        )
        return HttpResponse("Success!")