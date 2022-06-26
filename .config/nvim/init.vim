:set number
:set mouse=a
:set autoindent
:set tabstop=4
:set shiftwidth=4
:set smarttab
:set softtabstop=4

call plug#begin()

Plug 'https://github.com/tomasiser/vim-code-dark'
Plug 'https://github.com/vim-airline/vim-airline'

call plug#end()

colorscheme codedark

hi Normal guibg=NONE ctermbg=NONE
hi EndOfBuffer guibg=NONE ctermbg=NONE
highlight LineNr ctermbg=none
