import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-4xl font-bold text-center">
        404 - Página Não Encontrada
      </h1>
      <p className="text-gray-600 text-center">
        Desculpe, a página que você está procurando não existe.
      </p>
      <Link
        href="/"
        className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
      >
        Voltar para Home
      </Link>
    </div>
  )
}
