from cmath import exp
from .deco import add

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