module.exports = {
  themeConfig: {

    // 站点标题
    title: 'My Awesome Site',

    // 站点描述
    description: 'Just playing around',


    //导航栏
    nav: [
      { text: "主页", link: "/" }
    ],

    // 手动侧边栏路由
    sidebar: [
      {
        title: '快速开始 - 从入门到神殿',
        collapsable: true,
        children: [
          '/start_quickly/compatibility',
          '/start_quickly/download',
          '/start_quickly/360',
          '/start_quickly/faa_settings',
          '/start_quickly/first_battle_plan',
          '/start_quickly/link_start',
        ],
      },
      {
        title: '进阶使用 - 一键打爆世界',
        collapsable: true,
        children: [
          '/advanced/stage_id',
          '/advanced/guild_task',
          '/advanced/battle_plan_editor',
          '/advanced/auto_food',
          '/advanced/cs',
          '/advanced/cus_todo',
          '/advanced/timer',
          '/advanced/level2',
          '/advanced/warm_gift',
        ],
      },
      {
        title: '开发文档 - 成为FAA领域大神(误)',
        collapsable: true,
        children: [
          '/development/github_flow',
          '/development/structure',
          '/development/analog_input',
          '/development/settings_structure',
          '/development/image_match',
          '/development/daily_flow',
          '/development/battle_flow',
          '/development/battle_plan_interpreter',
          '/development/battle_plan_executor',
          '/development/loot_recognition',
          '/development/misu_flow',
          '/development/auto_food',
          '/development/hlhy_bug',
        ],
      },
    ],

  },
};