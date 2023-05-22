export interface iDocumentLink {
  id: string;
  title: string;
  url: string;
}

export interface iDocument {
  id: string;
  type:
    | 'BALANÇOS MENSAL / ANUAL'
    | 'CERTIFICADOS E CERTIDÕES'
    | 'CONVÊNIO PMS'
    | 'ESTATUTO'
    | 'REGULAMENTO INTERNO'
    | 'ATAS'
    | 'PRESTAÇÕES DE CONTAS'
    | 'PLANO DE TRABALHO '
    | 'RELATÓRIO DE ATIVIDADES';
  links: iDocumentLink[];
}

export interface iDocumentWithNumberOfLinks extends iDocument {
  numberOfLinks: number;
}
