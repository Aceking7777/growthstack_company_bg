from odoo import models, fields

class ResCompany(models.Model):
    _inherit = 'res.company'

    background_color = fields.Char(string="Background Color")
    background_image = fields.Binary(string="Background Image")
    background_opacity = fields.Float(string="Background Opacity")
