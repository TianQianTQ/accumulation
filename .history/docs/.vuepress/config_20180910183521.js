module.exports = {
  title: '��վ����',
  description: '��վ����',
  // ע�뵽��ǰҳ��� HTML <head> �еı�ǩ
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // ����һ���Զ���� favicon(��ҳ��ǩ��ͼ��)
  ],
  base: '/web_accumulate/', // ���ǲ���github��ص����� ����ὲ
  markdown: {
    lineNumbers: true // �������ʾ�к�
  },
  themeConfig: {
    sidebarDepth: 2, // e'b��ͬʱ��ȡmarkdown��h2 �� h3 ���⣬��ʾ�ڲ�����ϡ�
    lastUpdated: 'Last Updated' // �ĵ�����ʱ�䣺