export const categoryIndex = new Map<number, Set<string>>([
  [1010, new Set(["79","80","83","85","86","144","146","287","290","292","330","331","333","335","336","338","343","383","522","530","531","532","533","534","537","538","543","546","547","664","665","676","677","688","693","698","700","710","716","717","722","725","729","730","735","739","741","742","744","790","791","793","796","805","808","832","833","839","840","846","849","863","865","896","907","908","937","941","950","963","967","969","971","981","987","988","998","1004","1009","1016","1023","1029","1045","1054","1058","1072","1081","1087","1092","1103","1108","1110","1111","1112","1116","1117","1120","1126","1127","1131","1133","1141","1143","1149","1153","1157","1170","1171","1177","1181","1182","1185","1186","1189","1199","1206","1217","1221","1227","1229","1232","1234","1235","1241","1243","1263","1266","1268","1273","1277","1288","1308","1314","1317","1326","1328","1329","1330","1412","1429","1430","1433","1434","1439","1440","1441","1442","1443","1444","1445","1447","1449","1452","1493","1499","1500","1504","1507","1509","1557","1558","1559","1561","1565","1567","1598","1606","1608","1620","1621","1625","1626","1627","1628","1631","1632","1644","1645","1712","1716","1745","1757","1778","1779","1799","1802","1803","1804","1816","1823","1829","1840","1849","1851","1852","1853","1866","1875","1906","1913","1929","2012","2013","2014","2020","2319","2326","2329","2333","2335","2352","2358","2553","2554","2555","2556","2558","2560","2561","2575","2586","2587","2596","2604","2605","2606","2614","2713","2736","2740","2754","2771","2775","2776","3063","3078","3122","3191","3193","3194","3195","3196","3200","3205","3229","3230","3251","3270","3271","3305","3307","3345","3346","3348","3396","3397","3398","3406","3407","3410","3411","3412","3415","3416","3430","3436","3438","3439","3444","3445","3446","3449","3465","3468","3472","3473","3490","3497","3498","3499","3500","3501","3502","3503","3504","3505","3509","3551","3553","3555","3556","3557","3560","3561","3563","3580","3581","3587","3588","3593","3594","3595","3596","3615","3616","3617","3621","3622","3624","3658","3675","3681","3683","3689","3692","3701","3702","3776","3783","3784","3805","3806","3808","3816","3819","3820","3943","3946","3947","3950","3951","3952","3954","3955","3956","3957","3958","3959","3962","3966","3971","3972","3973","3974","3975","3977","3978","3979","3980","3982","3983","3991","3995","3997","3998","3999","4000","4001","4002","4006","4008","4013","4014","4015","4023","4026","4034","4035","4036","4038","4039","4040","4041","4042","4043","4044","4045","4046","4047","4049","4051","4052","4053","4054","4066","4070","4072","4074","4075","4078","4080","4081","4083","4084","4086","4087","4089","4090","4092","4098","4100","4102","4108","4109","4113","4116","4117","4121","4125","4127","4129","4131","4132","4134","4135","4137","4138","4139","4140","4141","4142","4143","4196","4226","4269","4270","4271","4309","4379","4412","4441","4445","4546","4572","4708","4722","4758","4759","4760","4761","4763","5337","5338","5543","5635","5676","5931","5954","5955","5956","5957","5959","5960","5961","5963","5972","5973","5979","6031","6032","6033","6080","6081","6829","6831","6984","7043","7047","7048","7051","7090","7109","7132","7133","7134","7135","7137","7142","7150","7151","7152","7153","7154","7159","7160","7161","7163","7189","7229","7230","7231","7232","7235","7236","7237","7238","7247","7259","7260","7261","7264","7281","7317","7379","7390","7391","7392","7393","7408","7409","7452","7525","7526","7527","7528","7529","7531","7653","7654","7681","7682","7788","7789","7795","7796","7797","7802","7803","7805","7838","7839","7845","7865","7867","7868","8031","8150","8225","8226","8227","8298","8419","8465","8608","8702","8825","9502","9503","9568","9619","9642","9699","9700","9766","9767","10742","10743","11941","11942","11943","12206","12207","12208","12241","12243","12244","12245","12246","12247","12248","12249","12250","12252","12254","12255","12256","12259","12260","12261","12262","12263","12264","12265","12267","12269","12270","12271","12273","12308","12311","12312","12314","12332","12338","12339","12340","12341","12342","12343","12345","12346","12348","12349","12350","12356","12358","12361","12365","12366","12368","12369","12370","12371","12374","12398","12401","12402","12404","12405","12406","12409","12410","12411","12414","12415","12419","12420","12421","12436","12437","12552","12553","12554","12555","12556","12558","12559","12560","12561","12562","12572","12573","12574","12599","12600","12601","12602","12603","12604","12605","12606","12607","12608","12610","12611","12612","12614","12637","12653","12669","12670","12673","12674","12675","12676","12677","12678","12679","12683","12684","12685","12686","12688","12689","12690","12691","12692","12693","12699","12700","12701","12703","12704","12710","12712","12717","12718","12744","12745","12766","12767","12768","12769","12772","12773","12774","12776","12777","12779","12781","12782","12803","12880","12881","12882","12883","12884","12885","12886","12887","12888","12889","12890","12891","12921","12949","12991","12993","12994","12995","12996","12998","12999","13004","13005","13006","13007","13008","13009","13010","13073","13075","13076","13077","13078","13079","13080","13081","13082","13083","13084","13085","13108","13109","13110","13111","13112","13113","13114","13115","13116","13117","13118","13138","13139","13140","13141","13143","13161","13163","13187","13188","13189","13190","13191","13192","13202","13203","13205","13207","13210","13211","13214","13221","13241","13242","13244","13249","13255","13268","13269","13272","13273","13288","13294","13295","13296","13301","13302","13304","13305","13306","13307","13312","13313","13336","13337","13338","13339","13340","13341","13342","13344","13347","13356","13362","13363","13364","13368","13369","13370","13447","13448","13450","13453","13454","13464","13465","13466","13467","13469","13470","13471","13472","13496","13502","13503","13504","13505","13506","13508","13509","13510","13511","13512","13514","13515","13516","13517","13518","13519","13520","13521","13524","13543","13573","13574","13576","13578","13579","13581","13582","13583","13586","13588","13590","13591","13606","13615","13618","13621","13622","13623","13624","13625","13627","13629","13630","13631","13633","13635","13636","13637","13638","13639","13647","13649","13651","13662","13676","13678","13680","13683","13696","13751","13765","13767","13770","13771","13772","13773","13775","13778","13821","13822","13823","13824","13831","13832","13833","13884","14005","14006","14007","14008","14017","14018","14019","14041","14049","14054","14055","14106","14108","14184","14187","14188","14192","14193","14207","14208","14209","14212","14213","14214","14216","14266","14267","14476","14478","14480","14481","14482","14483","14484","14485","14486","14526","14528","14530","14531","14533","14549","14550","14554","14571","14572","14573","14575","14577","14590","14593","14594","14728","14826","14831","14882","14887"])],
  [1020, new Set(["88","109","131","132","427","429","667","669","683","685","689","690","724","743","787","794","864","867","870","880","889","891","918","920","922","931","954","975","997","1005","1019","1032","1042","1043","1050","1051","1082","1124","1125","1128","1145","1161","1200","1201","1202","1203","1204","1205","1211","1222","1319","1348","1411","1432","1456","1495","1501","1573","1624","1652","1708","1750","1753","1759","1792","1797","1798","1820","1836","1838","1845","1850","1861","1868","1870","1877","1881","1888","1889","1892","2010","2559","2562","2592","2731","2770","2772","2779","3064","3065","3206","3252","3282","3333","3344","3400","3442","3443","3467","3554","3582","3586","3590","3591","3592","3618","3619","3620","3623","3654","3672","3684","3697","3772","3773","3774","3802","3810","3821","3822","3948","3949","3960","3961","3963","3965","3968","3969","3984","3993","4003","4009","4011","4016","4019","4025","4029","4033","4048","4050","4067","4068","4069","4071","4073","4076","4088","4093","4094","4101","4104","4105","4107","4110","4111","4114","4122","4123","4124","4128","4230","4279","4308","4338","4381","4392","4393","4687","4719","4753","4754","4757","4762","5150","5922","5924","5927","5928","5929","5935","5936","5938","5941","5944","5962","5970","5975","5976","5977","5978","6030","6078","6079","6826","6830","6929","6930","6931","6932","6933","6935","6936","6937","6938","6939","6940","6941","6942","6943","6944","6945","6946","6949","6950","6951","6952","6953","6954","6955","6956","6957","6958","6959","6960","6961","6962","6963","6964","6965","6978","6979","6980","6981","6982","6983","6985","6987","6988","6989","6990","6991","6999","7000","7001","7002","7003","7004","7005","7006","7007","7008","7009","7010","7011","7012","7013","7014","7015","7016","7017","7018","7019","7020","7021","7022","7023","7024","7025","7026","7027","7028","7029","7032","7045","7046","7049","7050","7052","7053","7054","7055","7056","7057","7058","7059","7060","7061","7062","7063","7064","7065","7066","7067","7068","7069","7070","7071","7072","7073","7074","7075","7076","7077","7078","7079","7080","7081","7082","7083","7084","7085","7086","7087","7088","7089","7091","7092","7093","7094","7095","7096","7097","7098","7099","7100","7101","7102","7103","7104","7105","7108","7110","7111","7112","7113","7114","7115","7116","7117","7118","7119","7120","7121","7136","7138","7140","7141","7143","7144","7146","7147","7148","7233","7234","7253","7257","7258","7262","7284","7407","7453","7454","7535","7599","7800","7801","7804","7836","7837","8096","8297","8418","8464","8826","9584","9698","9814","10244","11260","11283","11866","12139","12140","12230","12251","12253","12258","12272","12274","12305","12307","12313","12344","12372","12373","12403","12408","12412","12413","12438","12470","12471","12472","12516","12543","12565","12579","12613","12702","12705","12706","12707","12708","12709","12713","12714","12720","12775","12778","12783","12784","12785","12787","12788","12789","12790","12791","12792","12793","12794","12795","12800","12813","12815","12816","12817","12818","12819","12820","12821","12822","12823","12824","12825","12826","12827","12828","12829","12830","12831","12832","12833","12834","12835","12836","12837","12838","12839","12840","12879","12892","12893","12951","12976","13142","13185","13186","13201","13206","13209","13223","13243","13245","13246","13247","13250","13251","13252","13266","13270","13271","13274","13293","13299","13303","13327","13328","13329","13330","13345","13360","13361","13365","13366","13367","13449","13455","13459","13462","13463","13474","13476","13478","13479","13488","13490","13507","13513","13522","13523","13575","13577","13584","13589","13608","13611","13614","13620","13628","13632","13634","13643","13645","13652","13655","13656","13657","13666","13690","13709","13712","13717","13719","13722","13727","13729","13740","13745","13746","13747","13748","13756","13774","13776","13777","13784","13785","13786","13797","13799","13818","13819","13820","13825","13826","13827","13828","13829","13830","13867","13927","13931","13932","13933","13934","13935","13936","13937","13938","13939","13940","13941","13942","13943","13944","13945","13946","13947","13948","13949","13950","13951","13952","13953","13957","13959","13960","13961","13962","13963","13964","13965","13966","13967","13968","13969","13970","13971","13972","13973","13974","13975","13976","13977","13978","13979","13980","13981","13982","13983","13984","13985","13986","13987","13988","13989","13990","13991","13992","13993","13995","13999","14000","14001","14002","14003","14009","14010","14020","14023","14024","14029","14048","14050","14104","14105","14109","14110","14111","14112","14113","14114","14115","14116","14117","14118","14119","14120","14121","14122","14123","14124","14125","14126","14127","14128","14129","14130","14131","14132","14142","14161","14162","14163","14164","14165","14166","14167","14168","14169","14170","14171","14172","14173","14174","14175","14176","14177","14178","14179","14180","14181","14182","14183","14185","14186","14205","14298","14300","14338","14339","14340","14352","14353","14354","14355","14356","14357","14465","14466","14477","14479","14487","14488","14489","14490","14491","14492","14523","14525","14527","14534","14547","14548","14551","14552","14553","14555","14556","14561","14564","14565","14566","14568","14569","14574","14578","14579","14580","14581","14582","14583","14584","14585","14586","14587","14588","14591","14592","14604","14610","14612","14621","14696","14697","14698","14699","14708","14714","14716","14738","14754","14799","14803","14804","14807","14821"])],
  [1030, new Set(["682","704","875","915","928","929","955","957","1165","1744","1783","1899","3208","3275","3340","3399","3428","3431","3471","3558","3559","3562","3583","3584","3699","3775","3785","3817","3818","3953","3967","3970","3976","3986","3987","3992","3996","4012","4017","4027","4028","4030","4037","4077","4099","4106","4118","4119","4130","4133","4144","4293","4375","4376","4377","4378","4726","4727","4738","4751","4752","4756","4764","5165","5309","5310","5436","5437","5466","5467","5468","5636","5641","5670","5677","5716","5717","5718","5719","5745","5746","5747","5748","5749","5750","5751","5764","5765","5766","5767","5768","5769","5770","5771","5772","5820","5958","5964","6075","6818","6827","6832","7035","7036","7037","7040","7139","7145","7190","7280","7282","8415","8417","9565","11098","11099","11100","11127","11128","11182","11261","12039","12040","12242","12257","12266","12268","12309","12407","12417","12418","12484","12485","12486","12517","12557","12715","12741","12780","12961","12985","12997","13222","13248","13300","13315","13343","13353","13357","13501","13580","13587","13640","13681","13691","13744","13930","14031","14032","14051","14053","14211","14215","14250","14358","14475","14520","14524","14532","14567","14570","14589","14709","14808"])],
  [1040, new Set(["13119","13120","13121","13122","13144","13145","13146","13147","13148","13149","13150","13151","13152","13153","13154","13155","13156","13157","13158","13164","13220","13229","13335","13468","13475","13616","13626","13642","13692","13701","13730","13764","13925","13926","14206","14210","14346","14619","14620"])],
  [1050, new Set(["12681","13895","13897","13898","13901","13902","14308","14310","14313","14322","14324","14330","14332","14333","14337","14596","14597","14598","14599","14600","14601","14602"])],
  [1060, new Set(["4795","4801","4802","4803","4804","4805","4806","4807","4808","4809","4811","4812","4813","4814","4815","4816","4817","4818","4819","4820","4821","4825","4826","4827","4828","4829","4830","4831","4832","4833","4834","4835","4836","4837","4838","4839","4840","4841","4842","4843","4844","4845","4846","4847","4848","4849","4850","4851","4852","4853","4854","4855","4856","4857","4858","4859","4860","4861","4862","4863","4864","4865","4866","4867","4868","4869","4870","4871","4872","4873","4874","4875","4876","4877","4878","4879","4880","4881","4882","4883","4884","4885","4886","4887","4888","4889","4890","4891","4892","4893","4894","4895","4896","4897","4898","4899","4900","4902","4903","4904","4905","4906","4907","4908","4909","4910","4911","4912","4913","4914","4915","4916","4917","4918","4919","4920","4921","4922","4923","4924","4925","4926","4927","4928","4929","4930","4931","4932","4933","4934","4935","4936","4937","4939","4940","4941","4943","4944","4945","4946","4947","4948","4949","5164","5215","5216","5217","5218","5220","5221","5222","5223","5224","5225","5226","5227","5228","5229","5230","5231","5400","5455","5456","5457","5458","5481","5482","5483","5484","5485","5486","5487","5488","5489","5490","5491","5492","5494","5495","5496","5497","5498","5499","5500","5501","5502","5503","5504","5505","5506","5507","5508","5509","5510","5511","5512","5513","5514","5520","5521","5528","5559","5661","5662","6004","6850","6851","6852","6853","6854","6855","6856","6857","6858","6859","6861","6862","6863","6864","6865","6866","6868","6869","6870","6871","6872","6873","6874","6875","6876","6877","6878","6879","7127","7187","7205","7215","7216","7217","7218","7241","7242","7243","7244","7274","7275","7276","7277","10171","10172","10173","10174","10175","10176","11176","11177","11178","11180","11915","12461","12466","12468","12469","12566","12567","12721","12724","12848","12849","12851","12855","12906","12907","12908","12909","12910","12911","12912","12913","13019","13020","13130","13224","13230","13318","13331","13332","13333","13358","13434","13435","13438","13441","13442","13482","13487","13497","13603","13609","13805","13866","13874","13875","13881","14252","14896"])],
  [1070, new Set(["4797","4950","4951","4952","4953","4954","4955","4956","4957","4958","4959","4960","4961","4962","4963","4964","4965","4966","4967","4968","4969","4970","4971","4972","4973","4974","4975","4976","4977","4978","4979","4980","4981","4982","4983","4984","4985","4986","4987","4988","4989","4990","4991","4992","4993","4994","4995","4996","4997","4998","4999","5000","5001","5003","5004","5005","5006","5007","5008","5009","5010","5011","5012","5013","5015","5016","5017","5018","5019","5020","5021","5022","5023","5024","5025","5026","5027","5028","5030","5031","5032","5033","5034","5035","5036","5037","5038","5039","5040","5041","5042","5043","5044","5045","5046","5047","5048","5049","5050","5051","5052","5053","5054","5055","5056","5057","5058","5059","5060","5061","5062","5063","5064","5065","5066","5067","5068","5069","5070","5071","5072","5073","5074","5075","5076","5077","5078","5079","5080","5081","5082","5163","5232","5233","5234","5235","5236","5237","5238","5239","5240","5241","5243","5248","5249","5250","5253","5255","5267","5268","5269","5270","5273","5274","5515","5516","6005","6843","6844","6845","6846","6847","6848","6849","6927","6928","7184","7185","7186","7204","7219","7220","7221","7222","7239","10178","10179","10180","10181","10182","10183","12423","12431","12433","12434","12568","12569","12726","12727","12729","12730","12852","12853","12854","12915","12917","13026","13127","13193","13225","13319","13484","13485","13604","13804","13879","13880","14253","14897"])],
  [1080, new Set(["7322","7323","7324","7325","7327","7328","7329","7330","7331","7332","7333","7334","7335","7336","7337","7338","7339","7340","7341","7343","7345","7346","7347","7348","7349","7350","7351","7352","7353","7354","7356","7357","7358","7359","7360","7361","7362","7363","7364","7365","7366","7367","7368","7369","7370","7371","7380","7381","7382","7402","7403","7404","7405","7456","7457","7458","7462","7463","7464","7465","7466","7467","7516","7517","7518","7519","7520","7521","7522","7523","7524","7532","7533","7534","7536","7537","7538","7539","7540","7541","7542","7543","7544","7545","7546","7547","7578","7579","7580","7594","7595","7596","8035","8036","8037","8393","8394","8395","8466","8467","8468","8757","8758","8759","9310","9311","9312","9313","9314","9315","9316","9541","9542","9543","9544","9545","9546","9547","9548","9549","9562","9563","9564","11101","11102","11103","11104","11113","11114","12214","12215","12216","12217","12219","12220","12221","12222","12288","12289","12290","12291","12292","12293","12325","12328","12329","12330","12334","12335","12351","12363","12379","12386","12387","12388","12389","12390","12391","12392","12393","12394","12395","12396","12399","12400","12462","12464","12465","12521","12563","12564","12725","13057","13058","13287","13525","13566","13567","13568","13571","13572","13592","13593","13594","13595","13596","13597","13860","13861","13872","13873","13877","13878","13904","13906","14012","14035","14036","14037","14038","14039","14040","14144","14145","14146","14191","14245","14706","14707"])],
  [2010, new Set(["c1038","c652","c329","c388","c1027","c1171","c548","c87","c212","c209","c195","c106","c93","c513","c352","c33","c1025","c1146","c79","c1034","c464","c237","c1035","c341","c1029","c1169","c1082","c233","c1151","c911","c326","c75","c342","c101","c1194","c194","c410","c90","c244","c434","c74","c243","c103","c414","c1174","c1291","c1305","c467","c217","c230","c300","c130","c479","c78","c1256","c225","c449","c102","c1180","c1181","c1179","c673","c1021","c81","c86","c507","c1066","c73","c1079","c1063","c916","c37","c531","c100","c210","c40","c476","c136","c111","c746","c616","c107","c350","c84","c813","c1152","c83","c250","c133","c1047","c85","c823","c108","c251","c196","c370","c371","c132","c1024","c445","c303","c253","c80","c223","c939","c306","c289","c56","c1257","c1083","c402","c228","c909","c76","c1173","c35","c1220","c64","c99","c319","c360","c1022","c231","c1280","c1170","c222","c1177","c438","c1178","c1175","c700","c400","c547","c191","c1294","c44","c1285","c1168","c19","c423","c1127","c1126","c242","c92","c241","c25","c1028","c21","c481","c1031","c518","c1246","c88","c1030","c355","c1056","c1057","c159","c8","c549","c281","c653","c1005","c1333","c1172","c137","c1006","c1165","c1166","c1167","c71","c1141","c1140","c1149","c147","c288","c903","c1193","c655","c131","c516","c246","c353","c471","c13","c266","c91","c1078","c443","c290","c1160","c292","c72","c545","c1289","c330","c493","c364","c506","c1072","c1074","c1176","c285","c694","c425","c254","c524","c1026","c27","c461","c70","c444","c95","c392","c448","c501","c112","c82","c366","c807","c42","c581","c157","c328","c62","c346","c135","c745","c229","c59","c96","c26","c1058","c43","c1032","c134","c372","c1037","c583","c60","c866","c465","c576","c207","c97","c351","c440","c1036","c948","c901","c1046","c6","c151","c284","c110","c138","c179","c220","c451","c367","c177","c77","c356","c197","c1154","c316","c1378","c218","c585","c577","c22","c252","c98","c298","c447","c139","c654","c1023","c18","c271","c495","c156","c238","c428","c23","c234","c337","c224","c743","c1062","c143","c94","c1081","c109","c544","c354","c208","c206","c249","c1033","c1445","c1408","c1390","c1464","c1385","c1409","c1460","c1433","c1443","c1486","c1442","c1414","c1389","c1398","c1465","c1370","c1424","c1392","c1434","c1373","c1366","c1488","c1372","c1368","c1427","c1426","c1388","c1382","c1367","c1393","c1411","c1232","c1435","c1496","c1394","c1401"])],
  [2020, new Set(["c649","c1093","c847","c127","c422","c849","c327","c429","c734","c733","c851","c902","c842","c736","c890","c145","c365","c411","c148","c245","c361","c273","c14","c818","c854","c726","c468","c295","c870","c347","c149","c369","c884","c419","c690","c283","c305","c17","c265","c427","c274","c280","c412","c907","c160","c862","c755","c430","c431","c1092","c730","c843","c480","c161","c478","c908","c1095","c334","c331","c349","c731","c301","c296","c871","c16","c861","c312","c1190","c272","c248","c142","c845","c729","c310","c1129","c1130","c421","c152","c906","c335","c275","c846","c336","c255","c270","c912","c732","c426","c333","c339","c395","c404","c781","c855","c737","c344","c1227","c817","c735","c125","c885","c860","c299","c752","c1187","c399","c728","c144","c158","c459","c905","c308","c309","c374","c126","c1091","c852","c287","c853","c128","c844","c420","c119","c256","c848","c841","c896","c409","c840","c140","c727","c756","c359","c240","c120","c15","c754","c401","c175","c648","c850","c269","c129","c332","c1429","c1428","c1253","c1466","c1431","c1454","c1432","c1397"])],
  [2030, new Set(["c31","c227","c68","c368","c773","c774","c181","c1087","c586","c1158","c393","c805","c892","c66","c472","c202","c325","c65","c163","c1157","c41","c1159","c45","c188","c470","c348","c1019","c313","c200","c216","c278","c61","c914","c462","c318","c67","c450","c89","c527","c20","c1089","c322","c183","c398","c190","c534","c747","c488","c176","c651","c715","c38","c219","c198","c477","c58","c345","c174","c872","c1205","c1204","c943","c546","c235","c53","c757","c50","c897","c167","c1344","c1162","c52","c69","c721","c716","c164","c307","c891","c1264","c873","c323","c178","c446","c1004","c469","c453","c343","c165","c320","c321","c304","c317","c945","c458","c117","c29","c302","c1086","c1303","c1018","c1302","c650","c452","c898","c486","c514","c703","c456","c1261","c170","c172","c162","c268","c169","c1084","c915","c1064","c166","c1293","c1316","c116","c1128","c46","c532","c389","c12","c1207","c279","c1048","c500","c435","c457","c324","c338","c1322","c1263","c180","c1315","c311","c54","c1016","c491","c490","c1321","c424","c1244","c1245","c293","c205","c192","c893","c199","c1332","c189","c267","c173","c874","c63","c146","c314","c584","c877","c115","c1301","c11","c436","c357","c1161","c1155","c168","c391","c10","c1090","c460","c1088","c193","c203","c182","c118","c413","c294","c1231","c1230","c150","c340","c49","c1317","c739","c39","c104","c1330","c213","c51","c1262","c416","c740","c437","c32","c297","c153","c454","c793","c806","c221","c226","c24","c788","c186","c214","c1352","c403","c362","c492","c1377","c154","c483","c1039","c913","c1017","c215","c1209","c155","c582","c105","c455","c211","c247","c373","c895","c875","c1206","c113","c276","c291","c525","c695","c204","c810","c363","c396","c239","c9","c512","c232","c889","c439","c390","c394","c187","c30","c944","c28","c1361","c1085","c1156","c442","c1323","c1210","c114","c141","c1219","c1376","c282","c1208","c201","c578","c171","c482","c1406","c1446","c1399","c1359","c1386","c1360","c1485","c1448","c1423","c1495","c1452","c1497","c1357"])],
  [2040, new Set(["c670","c658","c929","c1122","c1115","c707","c689","c594","c1111","c1061","c709","c682","c636","c645","c551","c959","c659","c830","c1108","c831","c1201","c952","c677","c684","c678","c931","c816","c591","c1124","c574","c569","c559","c1304","c1010","c725","c671","c837","c553","c562","c556","c564","c1014","c571","c568","c633","c1186","c685","c566","c572","c560","c632","c714","c832","c596","c661","c1195","c1202","c803","c918","c696","c587","c675","c595","c662","c1013","c698","c1042","c1273","c1274","c1105","c1109","c697","c917","c687","c663","c836","c1112","c930","c692","c960","c833","c640","c949","c1221","c1009","c825","c674","c1110","c1106","c1279","c742","c1045","c923","c691","c712","c552","c751","c758","c1272","c1266","c701","c710","c933","c683","c1295","c1284","c790","c638","c686","c713","c597","c1131","c1132","c956","c1197","c1117","c570","c565","c1319","c631","c1267","c1265","c1318","c1164","c829","c1224","c579","c704","c826","c573","c676","c1282","c550","c910","c668","c708","c919","c1143","c1142","c950","c1192","c1343","c637","c720","c634","c718","c657","c561","c900","c598","c1121","c1125","c1123","c1375","c1011","c706","c1043","c641","c1229","c1255","c593","c599","c592","c935","c827","c1288","c838","c1329","c1364","c1365","c554","c563","c557","c748","c1147","c750","c942","c1119","c954","c567","c667","c590","c617","c702","c828","c666","c588","c533","c681","c1351","c759","c647","c575","c1114","c680","c679","c1199","c955","c1040","c724","c951","c589","c717","c664","c934","c1139","c1107","c1113","c1196","c635","c719","c953","c639","c1044","c1222","c644","c646","c936","c669","c665","c961","c1008","c580","c1153","c1374","c1163","c558","c656","c741","c1065","c834","c822","c618","c1012","c1320","c1200","c642","c699","c660","c555","c688","c1198","c711","c738","c1041","c1462","c1384","c932","c1379","c1347","c1348","c1349","c1249","c1400","c1312","c1436","c1371","c1487","c1421","c1430","c1383","c1381","c1380","c1342","c1440","c1450","c1459","c1449","c1422","c1451","c1437","c1387","c1346","c1439","c1350"])],
  [2050, new Set(["c386","c1271","c441","c503","c184","c415","c463","c260","c856","c466","c474","c819","c397","c405","c498","c433","c1182","c1183","c375","c630","c277","c865","c937","c358","c380","c417","c407","c857","c904","c418","c487","c286","c502","c378","c185","c259","c614","c504","c1137","c387","c508","c1325","c1324","c494","c385","c615","c1148","c1300","c899","c261","c475","c1055","c485","c382","c1226","c1225","c484","c922","c376","c497","c921","c379","c509","c257","c263","c473","c505","c406","c1354","c315","c377","c432","c381","c258","c408","c262","c511","c489","c510","c384","c383","c264","c1326","c496","c1356","c1254","c1438","c1251","c1248","c1369","c1489","c1461","c1391","c1311","c1447"])],
  [2060, new Set(["c621","c536","c880","c519","c604","c612","c603","c926","c626","c539","c1188","c628","c1059","c1050","c48","c879","c605","c607","c723","c541","c749","c620","c610","c608","c1275","c1296","c625","c1286","c1134","c1133","c606","c619","c602","c601","c1054","c1052","c535","c1144","c542","c928","c611","c622","c629","c1060","c1049","c537","c886","c1189","c624","c609","c627","c47","c538","c623","c927","c543","c613","c540","c600","c1053","c1002","c1051","c887","c1252","c1407"])],
  [2070, new Set(["c776","c763","c925","c791","c800","c769","c772","c526","c1292","c811","c796","c804","c523","c878","c1184","c1363","c1211","c1098","c767","c520","c1003","c1269","c761","c766","c924","c797","c777","c1281","c814","c938","c785","c801","c1297","c864","c1287","c236","c1097","c1135","c1136","c820","c1213","c768","c522","c1355","c947","c1270","c1328","c762","c1223","c780","c881","c1283","c1145","c802","c760","c1228","c765","c517","c782","c1290","c839","c1331","c529","c1191","c876","c888","c794","c946","c783","c1353","c789","c515","c815","c1215","c787","c786","c764","c778","c863","c894","c941","c1212","c784","c808","c705","c528","c521","c792","c868","c1327","c809","c882","c1216","c1217","c1218","c883","c812","c1214","c795","c779","c821","c799","c530","c1453","c1247","c1419","c1420"])],
  [2080, new Set(["c980","c995","c967","c1203","c991","c998","c978","c975","c971","c973","c1185","c963","c986","c994","c968","c965","c996","c1233","c974","c970","c1001","c1268","c997","c1000","c987","c979","c962","c993","c999","c1150","c990","c972","c969","c964","c1362","c984","c985","c982","c981","c989","c977","c976","c992","c966","c983","c957","c958","c988","c1490","c1492","c1238","c1455","c1480","c1456","c1410","c1483","c1472","c1493","c1494","c1457","c1470","c1477","c1425","c1473","c1481","c1498","c1395","c1471","c1396","c1479","c1482","c1469","c1458","c1358","c1478","c1499","c1491","c1510","c1503","c1519","c1514","c1512","c1511","c1505","c1509","c1518","c1520","c1506","c1508","c1516","c1507","c1513","c1504","c1515","c1517"])],
  [2090, new Set(["5861","6840","6904","6905","6906","6907","6908","6909","6910","6911","6912","6913","6914","6915","6916","6917","6918","6919","6923","6924","6925","6926","7164","7165","7166","7167","7169","7170","7171","7172","7173","7174","7175","7176","7177","7178","7179","7180","7181","7182","7183","8767","8768","9560","9561","9945","9946","9947","9948","9949","9950","9951","9952","9953","9954","9955","9956","9957","9958","9959","9960","12133","12134","12135","12136","12137","12138","14464"])],
  [2100, new Set(["c1260","c1259","c1258"])],
  [3010, new Set(["321","322","323","324","325","326","327","332","334","337","2099","2100","2376","2377","2379","2544","2615","2753","2822","3068","3082","3083","3084","3331","4386","4703","5083","5084","5085","5091","5092","5093","5094","5095","5319","5320","5430","5517","5741","5742","5743","5744","5784","5856","7584","7585","7586","7587","7588","7589","7590","7591","7592","7869","8176","8177","8178","8179","8471","8472","8473","8533","8534","8535","8536","8574","8575","8576","8577","8578","8579","8580","8660","8769","8770","9617","9762","12578","12695","12974","13123","13124","13125","13126","13128","13173","13237","13526","13530","13534","13835","13913","13914","13958","14013","14014","14015","14028","14239","14284","14285","14414","14470","14504","14538","14539","14540","14541","14542","14627","14628","14629","14631","14632","14633","14635","14636","14638","14639","14640","14641","14643","14644","14645","14734","14742","14743","14744","14745","14746","14747","14748","14775","14776","14777","14778","14779","14780","14781","14836","14837","14852","14853"])],
  [3020, new Set(["3080","3402","3403","4349","4350","4351","4352","4354","4355","4356","4357","4358","5206","5207","5208","5210","5212","5213","11711","11712","12630","12758","12894","13275","14278","14755","14756","14757","14758","14759"])],
  [3030, new Set(["1374","1375","1376","1379","1380","1381","1382","2213","2214","2285","2286","2287","2288","2295","2304","2305","2389","2500","2501","2502","2505","2511","2513","2567","2570","2578","2579","2624","2626","2629","2642","2649","2767","2768","2769","2777","2794","2799","2800","2805","2810","2815","2820","2861","2863","2864","2867","2871","2875","2879","2880","2883","2884","2887","2888","2891","2895","2899","2903","2907","2908","2911","2912","2915","2916","2919","2923","2927","2931","2932","2935","2936","2939","2940","2943","2947","2951","2955","2959","2963","2979","2980","2983","2984","2987","2988","2991","2995","2999","3019","3022","3024","3027","3029","3030","3034","3035","3039","3040","3044","3045","3090","3263","3276","3277","3278","3279","3280","3360","3365","3370","3375","3381","3466","3469","3470","3539","3540","3541","3542","3543","3545","3548","3709","3710","3713","3714","3717","3720","3723","3724","3727","3730","3731","3734","3735","3738","3741","3744","3745","3748","3751","3754","3755","3758","3759","3762","3765","3768","3769","3786","3788","3790","3792","3794","3796","3798","3800","3824","3826","3828","3830","3832","3834","3836","3838","3840","3842","3844","3846","3848","3850","3852","3854","3856","3858","3860","3862","3864","3866","3868","3870","3872","3874","3876","3878","3886","3888","3890","3892","3894","3896","3898","3900","3902","3904","3906","3908","3910","3912","3914","3916","3918","3920","3922","3924","3926","3928","3930","3932","3934","4426","4525","4526","4527","4528","4532","4536","4540","4544","4549","5175","5603","5604","5605","5727","5728","5729","5730","5731","5732","5851","5859","5932","5982","5983","5984","5985","5986","5987","5988","5989","5990","5991","5992","5993","5994","5995","5996","7374","7651","7683","7684","7685","7686","7687","7688","7689","7690","7691","7692","7693","7694","7695","7696","7697","7698","7699","7700","7701","7702","7703","7704","7705","7706","7707","7708","7709","7710","7711","7712","7713","7714","7730","7731","7734","8760","9049","9050","9051","9052","9221","9261","9616","9964","11140","12185","12476","12478","12480","12482","12487","12489","12490","12492","12509","12510","12511","12512","12513","12514","12546","12550","12551","12898","12899","12900","12902","12905","12968","13104","13106","13107","13195","13196","13197","13227","13228","13256","13257","13262","13264","13348","13350","13439","13610","13766","13787","13792","13793","13954","13955","13956","13994","13996","13997","13998","14030","14044","14158","14546","14691","14692","14693","14694","14695","14796","14811","14816","14820","14828","14829","14914"])],
]);

export const categoryInfo = new Map<number, string>([
  [1010, "가구"],
  [1020, "잡화"],
  [1030, "벽걸이"],
  [1040, "천장"],
  [1050, "인테리어"],
  [1060, "벽지"],
  [1070, "바닥"],
  [1080, "러그"],
  [2010, "상의"],
  [2020, "하의"],
  [2030, "원피스"],
  [2040, "머리장식"],
  [2050, "액세사리"],
  [2060, "양말"],
  [2070, "신발"],
  [2080, "가방"],
  [2090, "우산"],
  [2100, "기타의류"],
  [3010, "도구/굿즈"],
  [3020, "울타리"],
  [3030, "기타"],
]);

export const categoryInfoIndex = [1010,1020,1030,1040,1050,1060,1070,1080,2010,2020,2030,2040,2050,2060,2070,2080,2090,2100,3010,3020,3030];