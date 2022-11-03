def is_policy_active(policy_num : str) -> bool :
    if len(policy_num) > 3:
        print('sucess')
    else:
        raise Exception('Invlid Policy Number')

try:
    is_policy_active('nxvcbnxbcv')
    is_policy_active('nx')
except Exception as err:
    print(err)
