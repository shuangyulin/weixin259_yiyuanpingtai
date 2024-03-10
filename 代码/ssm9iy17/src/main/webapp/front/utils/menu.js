const menu = {
    list() {
        return [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["新增","查看","修改","删除"],"menu":"患者","menuJump":"列表","tableName":"huanzhe"}],"menu":"患者管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["新增","查看","修改","删除","排班"],"menu":"医生","menuJump":"列表","tableName":"yisheng"}],"menu":"医生管理"},{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["查看","修改","删除"],"menu":"就诊信息","menuJump":"列表","tableName":"jiuzhenxinxi"}],"menu":"就诊信息管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["新增","查看","修改","删除"],"menu":"科室信息","menuJump":"列表","tableName":"keshixinxi"}],"menu":"科室信息管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","删除"],"menu":"挂号信息","menuJump":"列表","tableName":"guahaoxinxi"}],"menu":"挂号信息管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["删除","查看"],"menu":"诊断信息","menuJump":"列表","tableName":"zhenduanxinxi"}],"menu":"诊断信息管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","删除","排队"],"menu":"处方订单","menuJump":"列表","tableName":"chufangdingdan"}],"menu":"处方订单管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","修改","删除"],"menu":"订单排队","menuJump":"列表","tableName":"dingdanpaidui"}],"menu":"订单排队管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["查看","挂号"],"menu":"就诊信息","menuJump":"列表","tableName":"jiuzhenxinxi"}],"menu":"就诊信息管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","修改","删除","支付"],"menu":"挂号信息","menuJump":"列表","tableName":"guahaoxinxi"}],"menu":"挂号信息管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看"],"menu":"诊断信息","menuJump":"列表","tableName":"zhenduanxinxi"}],"menu":"诊断信息管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","支付"],"menu":"处方订单","menuJump":"列表","tableName":"chufangdingdan"}],"menu":"处方订单管理"},{"child":[{"appFrontIcon":"cuIcon-favor","buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"患者","tableName":"huanzhe"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","审核","诊断"],"menu":"挂号信息","menuJump":"列表","tableName":"guahaoxinxi"}],"menu":"挂号信息管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","修改","删除","处方"],"menu":"诊断信息","menuJump":"列表","tableName":"zhenduanxinxi"}],"menu":"诊断信息管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","修改","删除"],"menu":"处方订单","menuJump":"列表","tableName":"chufangdingdan"}],"menu":"处方订单管理"}],"frontMenu":[],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"医生","tableName":"yisheng"}]
    }
}
export default menu;
