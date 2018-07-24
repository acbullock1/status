import axios from "axios";
import got from "got";
var qs = require('qs');

const URLs = {
    "jira": "https://carnival.atlassian.net"
  }
  
export default {
    getMyOpenIssues: () => axios.get(URLs.jira+"/rest/api/2/issue/40237", null, {
        headers:{
            'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:61.0) Gecko/20100101 Firefox/61.0',
            'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language':'en-US,en;q=0.5',
            cookie:'__utma=248434965.1548153233.1507651217.1515510191.1515513146.194; cloud.session.token=eyJraWQiOiJzZXNzaW9uLXNlcnZpY2VcL3Nlc3Npb24tc2VydmljZSIsImFsZyI6IlJTMjU2In0.eyJhc3NvY2lhdGlvbnMiOltdLCJzdWIiOiI1NTcwNTg6MjUzNmJhMDYtZDUzNy00YTRhLTgwZWQtODE1NjQ4NDU4ZTA1IiwiYXVkIjoiYXRsYXNzaWFuIiwiaW1wZXJzb25hdGlvbiI6W10sIm5iZiI6MTUzMTg0NzkwNiwicmVmcmVzaFRpbWVvdXQiOjE1MzE4NDg1MDYsImlzcyI6InNlc3Npb24tc2VydmljZSIsInNlc3Npb25JZCI6IjI4YmU1MzBlLTYwM2ItNGM0NS1hYTUxLTIxMWExMTRjNWYyYiIsImV4cCI6MTUzNDQzOTkwNiwiaWF0IjoxNTMxODQ3OTA2LCJlbWFpbCI6ImFidWxsb2NrQHhldm8uY29tIiwianRpIjoiMjhiZTUzMGUtNjAzYi00YzQ1LWFhNTEtMjExYTExNGM1ZjJiIn0.KdE-5kbd1xj9FXeebgTFjdWXMpHkIkhJ1uSWqWk4Jk2uwoSbVuQBSFRaMafR57PpoZlFwikosogYtmJ0xtGy59NGg2kCvNGYymBPlr1k5ZVFJirQ6Ben_q1XYIXgmC2Nnwx49o2THixMAGgd1RSexkOaKMCUHPWwjYu0MiNp_m_MIqweR7sYSI6lqeVlrOmf17zGZLR4kK70nIOes_Fv084VcEbGlYr21BSeBCnnV0BUgfzGsMcDc3wtRNSVhkHCfiCfoMYRJiilPTwt0jufey88v_gDbPekuLjjqiT3ElzQqzpQY5m2VQrjPtxkog1kuTlp_IGpQPl-ElRXpjVg4w; ajs_user_id=%22557058%3A2536ba06-d537-4a4a-80ed-815648458e05%22; ajs_group_id=null; ajs_anonymous_id=%2217b3985e-c39d-4d56-9c32-78128301a9dd%22; atlassian.xsrf.token=BDAQ-5V4D-IYCQ-JBZA_5be3f4ac575bde3c4908cbcb3e8d66bb090ffff2_lin; AJS.conglomerate.cookie="|hipchat.inapp.links.first.clicked.abullock=false"',
            'Connection':'keep-alive',
            'Upgrade-Insecure-Requests':'1',
            'Cache-Control':"no-cache",
            'Access-Control-Allow-Origin':"*"
        }
    })
}
