from cmath import exp
from pydoc import cli
from .deco import add
import pytest

from rest_framework.test import APIClient

client = APIClient()

def test_normal_addition():
    ip1 = 10
    ip2 = 20
    act_res = add(ip1, ip2)
    exp_res = 30
    assert act_res == exp_res

def test_bad_addition():
    ip1 = 10
    ip2 = 20
    act_res = add(ip1, ip2)
    exp_res = 40
    assert act_res != exp_res

def test_list_sms():
    res = client.get('/identify/')
    assert res.status_code == 200

@pytest.mark.django_db
def test_create_sms():
    sms = { 
        "number" : "8767575",
        "msg" : "hey hi"
    }
    res = client.post('/identify/', sms, format='json')
    assert res.status_code == 201
