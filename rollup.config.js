import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import path from 'path';
import fs from 'fs-extra';

const iconsPath = path.join(__dirname, 'src/icons');
const distPath = path.join(__dirname, 'dist');
const esPath = path.join(__dirname, 'es');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const plugins = [
  babel({
    exclude: 'node_modules/**',
    extensions,
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
  }),
  nodeResolve({
    browser: true,
    extensions,
  }),
  commonjs(),
  terser(),
];

const globals = {
  react: 'React',
};

const external = (id) => /^react|react-dom|classnames/.test(id);

const cjsOutput = {
  format: 'cjs',
  exports: 'named',
  entryFileNames: '[name].js',
  dir: 'dist',
  globals,
};

const esOutput = {
  format: 'es',
  exports: 'named',
  entryFileNames: '[name].js',
  dir: 'es',
  globals,
};

export default (async () => {
  await fs.remove(distPath);
  await fs.remove(esPath);
  const files = await fs.readdir(iconsPath);

  const icons = await Promise.all(
    files.map(async (name) => {
      if(name === 'index.tsx') {
        return;
      }
      const entry = path.join(iconsPath, name);

      const hasFile = await fs.pathExists(entry);
      if (!hasFile) return null;

      return { name: name.replace('.tsx', ''), url: entry };
    }),
  );

  return [
    ...icons
      .filter((r) => r)
      .map(({ name, url }) => ({
        input: { [name]: url },
        output: [cjsOutput, esOutput],
        external,
        plugins,
      })),
    {
      input: { index: path.join(__dirname, 'src/icons/index.tsx') },
      output: [
        {
          ...cjsOutput,
          entryFileNames: 'index.js',
        },
        {
          ...esOutput,
          entryFileNames: 'index.js',
        },
      ],
      external,
      plugins,
    },
  ];
})();
