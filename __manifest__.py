{
    'name': 'GrowthStack Company Background',
    'version': '18.0.1.0.0',
    'category': 'Customization',
    'summary': 'Set a unique backend background per company',
    'author': 'Growth Stack Technology',
    'website': 'https://growthstack.com.ng',
    'depends': ['base', 'web'],
    'data': [
        'views/res_company_views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'growthstack_company_bg/static/src/js/company_bg.js',
            'growthstack_company_bg/static/src/css/company_bg.css',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
}
