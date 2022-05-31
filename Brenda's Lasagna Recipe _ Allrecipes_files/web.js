
(function() {
    var startTime = new Date;
    var counter = 1;
    var clientParams = {
'uspConsentCollector': null
    };

    var script = document.getElementById('celtra-script-1');
    if (!script || script.tagName.toLowerCase() !== 'script')
        throw 'Element with id equal to scriptId does not exist or is not a script.';

    var continueImpression = function() {
        counter = 0;
        for (var k in clientParams) {
            if (clientParams[k] === null)
                clientParams[k] = { 'status': 'error', 'time': new Date - startTime, 'data': 'Timeout' };
        }
        var continueScript = document.createElement('script');
        var base64ClientParams = btoa(unescape(JSON.stringify(clientParams)));
        continueScript.src = 'https://ads.celtra.com/consent/w4qmap7MtP57fLMCsSy0uycUsckw1606YdFypqVojPSJH0vIG06mqck4_C-376AKlDOX4a3qHqrwJ1kefdirHfK5LdBxYoScLUQ72uIU2KQHMV-Wy8sviSQi0GPv_elnDGeM3mrAWCp_qDMdaUCMvEaLG9mYVdKddEQNDg1A6vWE79QqG7rS37APP3MoXpsxCT8USfzFT3nnzn6FnvKS1PrJttatl-hjIti6lWKnKZhIVhvJikrzznLf0LaqDzh45iBa4VYf5uwIYNpnh4lqF_JYOA35Th7y3QdPnct-14he1pWrs7vyLsHUjXNK2pT0j6WaooKerVLlVb5qbwZLyzq17oBKHXfNWpTBtRGyY2aNR4DesOp_thAh9863Jl0GXfyFRv0spBsrfZwHmWOqZRPrGwRTAYiVeLRK1Y_cMhIM58StxIwKnn1xsL3MgJJ08TpYws0v6ta0B-m88TpS_blwaEoYqmoxUfmXBC3IxCV8URfmoB_QuSav7q0utVSYD525FTXq0G4g8KRZIjtHEet3W0PvpGoVgcdGRwLGKf6j55cNuNE7O8NLPRBTjdN47_mZ2W-JVYHwqudbBXKGPC0x52q2HlWDFNiOYqpCvwYXIHTDXduRsAoIr5RrNvyhxK1s2HNme69FWUDtNd95_DCPnSQzlXkg2-hf4HGqUf7WjNInzvYcLmgf4mFGfrnL30GfhAPO92qqf-9E5Yeb_Y-f6PYVb77UyzL0TGYCzZZk6cL7YHjCj2X_3Yopmgppoqb6NpbjRvLEFM-W3JsY9Xkb33YjJS7ReY11F1SDLI5Es_57ICBQ8cm2c5yqC4WBv_bFsgyk9mymRG0qiPHR9xUEOU0-heoz3UWBqrEUbJvJlHcH34qSSC0Jx6JP4ooHawPIxyQr54Kds1cEfDHoy4y99n5KRE6EJqjt50t68O2H3zBqu5bxZsrW8z7wYADUdCZ50IG-jUkHmEV8-9x-jrJeUJwH_rPQ1s_54i5U9Yzd--UZ0xQ9iQaewT1jjR3K1F-6apJ6eZphQ9vTMXTL6jhQZyvKVnyCwKzQFLZU7q1bm6OgPVboseIA5zGmOeI0TBs7ts6BpJZiCM0YJqjp7NRa0mM1pUHNSEDLjHAW6IIMc3PuOHwdwm5NvxrCsrf3Wp7lXMF6tCiEThplVArVL1avs4Ip2Cfk96LNEpwHCQJ4eebsBLjjded8RRULI_lsl4uPKO8JJvNY1JDRAz-UAmIN9norHbt0Rz1A9HFMgiheMVBB0-8gM6t_ouIOjDCJihXFYjag6BMJPenrh48ACH1kniScTdioHPDRvrpeeWJYVif1IupVFNZ5mA6kcJrGm4CVKwPMWimzDuQsu8b7FdUpzFhoDeLS-qeSI2-0IXYxJv0N63BX6PE8JjLB8dF86h4Wd-fuFfKsBPWrifvEViwVUugXgNiUqyNiFGvqfy1kdHvUuYYY05H1hYD58MWsRTIBmoloDkudIrHYMxgI6gJhEU74jxTSKsD3vK0biZYW4luNWtrhqcWFnzqcqnI2vxZbO7vSjIdYBeMYcYsjoXNllotVQTZaUAv93iEKt4qnGtloEZn2GD6bipGMyw43OdYKq09aMXfuOW6teFUqQOekL9z47Tx2TUyoIxRBrkUeP6McqSxVy-k1ZsNQeOZiYI3KVGTazHTJtppjaDocwTR8VpZ9EL7rZI30ig3I23MA8JB7ylVzqnIGrQ_lviimDKqKpZhv2vrcsKZ9G0vBjDS80I2zNQxLpBqqf0sD4W-su4H8QHOqroPiDocbGs9o6gXhAlI7bptGZh6eYBNpJLmmc3V579G4wvh405AME8PrWGv2bQUEFjVduYf1AH_93EuMZ7iHJD2iiPUf-0FsaQZgU5Lo_apMAvjHsgc3bqnvBco0lqkOGRxINn6VqNMW795AqJy3GG09BcZ0CKfERRxa9K1-IIYvKecOKxOVJOKe1zImw85ENrZvf40WiYlLuD_aYuLxcw9plVYlLLiD_LVg-rhFLMIHe-EfbvjH50ejZA6ibwMIXsxG7CthgukigPFHmTOIPhS4c2OHmooy984A6WpgRAcjBS9irpzq8zd6-gMua61Arurt0A7q6QSxGio7yebd9ezbEC5whrbBC9WWEL_eW7sK4CdUDT0MxVlglDN9UYazs1PnlBCkfebLvUfViP2thgKm-mWqL0ErqFqGeNnWLbohIDkXpihKe58N--B5xYegrI_M6rbw9AvY8Ek0wW85k65UvSFP9rdJtWcJ28P_W1Uf-liPJOWvlIgDziiVp0fLjyojQTgV-GTm_8Bz2dgkFQucG7DB4PCg9KhTtmmn4mYo1kR5dFFmHidq2l0OOgsTsFb-d51YWALts-zMRBAFabZhsVNpjd8aNcVnSBErT1IzvkJo6jUPPfT3O57US0zW-aWkr5TxfVqzHZUbnZtAPpmdG95Mvg9pteCAWEcuXfv56MNk_M2kipcr8OPaSKhbrdvEIKrqQ2cBrLMHiJ30hV-izde5M-OTj8bcNvp8pV9CvNgqYG82r3jB2-6hOTMSWtUEqKZCchSz5MDZGtsCVpCpZ6S41TMXObrqwDRVv9M81FYM5ZJmIUxVHGGypCPdHyklHsZbAppFxZxwMyu4LW-iYhQcVh_if0NuUcWGn88zfZuKFUQdzfkHMTI6O7QRkbrNpMUEay1dqZMOASgB8hZPjxJ-PBjL1aBT2HWRyfGxD31hVU4dMo-Qj8nnvZuExRwz9d4YV6U9Z3Gy7_B-4VlGigk1lleNB2n0cqh0IZGMEkKJJbySPpZweAHnZZkCPrNzbPh1sM5LYIpVLFtWepfFupI6h4nRjf0cqRbHyizBG7YXLoHfQ19ckBZK4ckm7ghe9M97KAX2sYqtPVddGv3pYLlH961ccEM4AvyACYcNGjnu-oaiwKDt4hfl7zz1dFONmsCQXUwq-sAkfNvliVyJwp0qfpIeFbjBN6Vr0hr7_3CqYyAQU9FtnOksgXaYJkQ9u4DeYobtrMnrgD5hm0CZDPmio5XRhanw1snKgSRHsbJbID6JaPBdkwqbkbe3h-yAtLkJ5K_dHSrwyj90N3khiyUaEATzQoZaBzHGcgi65MPN3yUAaEukuLIRUpcmQRLYMKFg3ej9e3Ixs7XBLJYcnFv5jACWqo-Z0gRVEsfe5qXuEvN6O9m2fFgcpJkY_NkwuJsfWNu1EA1i4wGFE2wmGA63LtlThHycYa82WIa6ejSbTAD1dTkWYRIja9irAsyWlEa15UYGA0tEyavQ-Y8s11eUNTNVHW7MIhQ8c87r-eTJTb6MzBP8rV4Sv0EKHa9zsdrAYoNAEp1Qxr7oCkWNyTGP-xCLFmcgvAEH97m1WjBt_y9hhYmVtedA6RKA9eUC7jbZQ3tjWHQc8wmaNny1QHAMa4qVGWllY_x_RQylY1arM3mwqRRxSBTHGZcW-KW-IjARmuYPtLjnvBiU4MHaW0L7t8NV7t866RAFQFxA7EHBtN7asZZ0zTAF8x2lDaOGLJvhuWQb4Q81ptev7tYGU5r0SOknNyrWib5B5zj0BCKGMPbQg34_RjX4QjkFDhRjEccAIdPymWeQql11Td84-muXNP1AuV2NOq6n6F5yBuiC_Gg3cKOkep5QpBQHuUjKbiMzTlp7w_HpAzD6SpSmjkpnrwBngtpcpAtwLKwwJnjDO0lsBTYuKlNoxRSuEp-7AgI_xcy4ZxUGLHj4mi4t2Fx9pDuYke4HE7wZHhRgjlodMr39kY-AtNg05rxfDcpjhBt8R2HfHMHfkDs6aBlZxWaD64hWXSIMJJV7WfGM_TnsVY9t3_pmMFMFmDHOi1lHdiVCiFY1DNN6u9_JWvk1F_6p8gheRUyo7YpukIpzINkAMrJJpA2sA7a1rJDbqV4sudRoq8LA9_hupbBG3HCtRIEoQnWzyP7B1qOqzQRSRlZVSflMGoFLudGXTJlAD3u5CYMMHysJPHrt_O5bFdRYfg39s9ljV_t9yQLLSbVtgyNV2KmLhr3DwhAIyn87coqZ_l-j88qaY2_sPNMs_qsb9At4-IUPY8forWUGm8wHScAf4smUQ055W7oiuFN3eVEDwvu0sWTPM7Y9xaI1HCfYe4gK7PYv8g2fTxxSLGxud6NnF1yv-BkQmU2vEmto0X88Y8y7tWaY96IGaBBmmsjCLPdM1JiavVzeXuYv0ggnhdi5l_HvD0eaMJB7DiIn7sloKUakHllRkxq6Jdw?signature=7U70nxvjR80AxO5Z8sJoDA&clientParams=' + encodeURIComponent(base64ClientParams);
        script.parentNode.insertBefore(continueScript, script.nextSibling);
    };

    var timeoutHandle = setTimeout(continueImpression, 500);
    var collectParam = function(name, status, data) {
        if (clientParams[name] === null) {
            clientParams[name] = { 'status': status, 'time': new Date - startTime, 'data': data };
            if (!--counter) {
                clearTimeout(timeoutHandle);
                continueImpression();
            }
        }
    };

(function(successCb, errorCb) {
    function uspApiCallback(uspData, success) {
        if (success) {
            return successCb(uspData);
        }
        errorCb("USP api call failed");
    }

    var uspApi;
    if (typeof __uspapi == 'function') {
        uspApi = __uspapi;
    } else {
        var f = window;
        var uspApiFrame;

        while(!uspApiFrame) {
            try {
                if (f.frames["__uspapiLocator"]) uspApiFrame = f;
            } catch(e) {}
            if (f === window.top) break;
            f = f.parent;
        }

        if (uspApiFrame) {
            var uspCallbacks = {}
            uspApi = function(cmd, version, callback) {
                var callId = Math.random() + "";
                var msg = {__uspapiCall: {
                    command: cmd,
                    version: version,
                    callId: callId
                }};

                uspCallbacks[callId] = callback;
                uspApiFrame.postMessage(msg, '*');
            }

            /* when we get the return message, call the stashed callback */
            window.addEventListener("message", function(event) {
                if (event && event.data && event.data.__uspapiReturn) {
                    var iabRes = event.data.__uspapiReturn;
                    uspCallbacks[iabRes.callId](iabRes.returnValue, iabRes.success);
                    delete uspCallbacks[iabRes.callId];
                }
            }, false);
        }
    }

    if (uspApi) uspApi('getUSPData', 1, uspApiCallback);
    else return errorCb("USP api not found");
}
     )(collectParam.bind(this, 'uspConsentCollector', 'success'), collectParam.bind(this, 'uspConsentCollector', 'error'));
})();